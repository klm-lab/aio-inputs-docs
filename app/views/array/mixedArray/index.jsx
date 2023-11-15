import Code from "../../../components/code";
import {addClasses} from "../../../util";
import InputLine from "../../../components/inputLine";

const Validation = ({children}) => {
    return <>
        <div className="codeSuperDeepLine">
            <span className="oKey no-indent">validation</span>
            <span>:</span>
            <span>{"{"}</span>
        </div>
        {children}
        <div className="codeSuperDeepLine">
            <span>{"},"}</span>
        </div>
    </>
}
const ValidationObjKey = ({oKey, value, message, comment, newCode}) => {
    return <>
        <div className="codeNestedLine">
            <span className="oKey no-indent">{oKey}</span>
            <span>:</span>
            <span>{"{"}</span>
        </div>
        {comment && <div className="codeSuperNestedLine">
            <span className="comment">{"// Specific error message"}</span>
        </div>}
        <div className={addClasses("codeSuperNestedLine", newCode && "codeNew")}>
            <span className="oKey no-indent">message</span>
            <span className="oKey">:</span>
            <span>{message}</span>
        </div>
        <div className="codeSuperNestedLine">
            <span className="oKey no-indent">value</span>
            <span className="oKey">:</span>
            <span>{value}</span>
        </div>
        <div className="codeNestedLine">
            <span>{"},"}</span>
        </div>
    </>
}

const ObjKey = ({objKey, value, comment}) => {
    return <>
        <span className="oKey no-indent">{objKey}</span>
        <span>:</span>
        <span>{value}</span>
        {comment && <span className="comment"> {comment}</span>}
    </>
}

const StringKey = ({sKey, comment}) => {
    return <>
        <span className="key">{sKey}</span>
        {comment && <span className="comment"> {comment}</span>}
    </>
}

const ValidationKey = ({objKey, value, comment}) => {
    return <>
        <div className="codeNestedLine">
            <ObjKey objKey={objKey} value={value} comment={comment}/>
        </div>
    </>
}

const CustomInput = ({children}) => {
    return <>
        <div className="codeDeepLine">
            <span>{"{"}</span>
        </div>
        {children}
        <div className="codeDeepLine">
            <span>{"},"}</span>
        </div>
    </>
}

const CreateArrayInput = ({children}) => {
    return <>
        <div className="codeLine">
            <span className="keyword">const</span>
            <span>[</span>
            <span>myInputs</span>
            <span>]</span>
            <span>=</span>
            <span className="definition no-indent">useInputs</span>
            <span className="no-indent">(</span>
            <span className="no-indent">[</span>
        </div>
        {children}
        <div className="codeLine">
            <span className="no-indent">]</span>
            <span>)</span>
        </div>
    </>
}

const CommonArrayInput = ({children}) => {
    return <Code>
        <CreateArrayInput>
            <CustomInput>
                <div className="codeSuperDeepLine">
                    <ObjKey objKey="name" value='"age",'/>
                </div>
                <div className="codeSuperDeepLine">
                    <ObjKey objKey="type" value='"number",'/>
                </div>
                {children}
            </CustomInput>
            <div className="codeDeepLine">
                <StringKey sKey='"name",' comment={
                    <span className="comment"> {"// No validation"}</span>
                }/>
            </div>
            <div className="codeDeepLine">
                <StringKey sKey='"firstname",' comment={
                    <span className="comment"> {"// No validation"}</span>
                }/>
            </div>
        </CreateArrayInput>
    </Code>
}


const Common18Val = () => <Validation>
    <ValidationKey objKey={"min"} value="18" comment={
        <span className="comment"> {"// Minimum validation"}</span>
    }/>
</Validation>

const MixedArray = () => {

    return <>
        <h2 className="subTitle">
            Array of string and object
        </h2>
        <p className="description">
            Let's create three inputs. Age with validation (minimum 18)
            and type number, Name and Firstname with no validation.<br/>
            We will use object for age input and string for others.
        </p>
        <CommonArrayInput>
            <Common18Val/>
        </CommonArrayInput>
        <p className="description">
            Lets add some error message for age input to help the user. You can add tow kind of error message:
        </p>
        <ul className="extra">
            <li>
                A general one
                <p>A general errorMessage act like a summary of all possible errors that can occur when user types.</p>
            </li>
            <li>
                A Specific one
                <p>A specific errorMessage is unique to each validation.</p>
            </li>
        </ul>
        <p className="description">
            Generally, if specific error message wasn't defined, the general one is used if it was defined.
            Specific error messages take priority on general ones. Let's add a general error message
        </p>
        <CommonArrayInput>
            <div className="codeSuperDeepLine">
                <span className="comment">{"// General error message"}</span>
            </div>
            <div className="codeSuperDeepLine codeNew">
                <span className="oKey no-indent">errorMessage</span>
                <span>:</span>
                <span>"We need you to have at least 18",</span>
            </div>
            <Common18Val/>
        </CommonArrayInput>
        <p className="description">
            Let's add a specific error message for the minimum validation rule
        </p>
        <CommonArrayInput>
            <Validation>
                <ValidationObjKey newCode oKey={"min"} value={18} message={
                    '"We need you to have at least 18",'
                } comment={
                    <span className="comment">{"// Specific error message"}</span>
                }/>
            </Validation>
        </CommonArrayInput>
        <p className="description">
            You can combine both kind of error message without any issue. Just keep this in mind.
            The specific one takes priority on general one.
        </p>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element
        </p>
        <Code>
            <div className="codeLine">
                <span className="keyword">return</span>
                <span className="no-indent">myInputs.</span>
                <span className="oKey no-indent">map</span>
                <span className="no-indent">(</span>
                <span className="">{"ip => {"}</span>
            </div>
            <div className="codeDeepLine">
                <span className="keyword">{"return"}</span>
                <span>{"<div "}</span>
            </div>

        </Code>
    </>
}

export default MixedArray