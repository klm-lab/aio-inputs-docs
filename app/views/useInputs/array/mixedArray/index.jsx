import Code from "../../../../components/code";
import KeyValue, {ChildBracket} from "../../../../components/codeComponents/keyValue";
import StringKey from "../../../../components/codeComponents/stringKey";
import Bracket from "../../../../components/codeComponents/bracket";
import {Link} from "@remix-run/react";
import {routes} from "../../../../util/constants";
import InputArrayLine from "../../../../components/codeComponents/inputArrayLine";
import FormRef from "../../../../components/FormRef";
import CreateInputs from "../../../../components/codeComponents/CreateInputs";
import KeyComment from "../../../../components/codeComponents/keyComment";

const CommonArrayInput = ({children}) => {
    return <Code>
        <CreateInputs array close>
            <Bracket>
                <KeyValue objKey="name" value='"age",'/>
                <KeyValue objKey="type" value='"number",'/>
                {children}
            </Bracket>
            <div className="codeLine">
                <StringKey sKey='"name",' comment={
                    <span className="comment"> {"// No validation"}</span>
                }/>
            </div>
            <div className="codeLine">
                <StringKey sKey='"firstname",' comment={
                    <span className="comment"> {"// No validation"}</span>
                }/>
            </div>
        </CreateInputs>
    </Code>
}


const CommonAgeVal = () => {
    return <KeyValue directValue={false} objKey="validation" value={
        <ChildBracket>
            <KeyValue objKey="min" value="18" comment={
                <span className="comment"> {"// Minimum validation"}</span>
            }/>
        </ChildBracket>
    }/>
}

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
            <CommonAgeVal/>
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
            <KeyComment comment="General error message"/>
            <KeyValue newCode objKey="errorMessage" value='"We need you to have at least 18",'/>
            <CommonAgeVal/>
        </CommonArrayInput>
        <p className="description">
            Let's add a specific error message for the minimum validation rule
        </p>
        <CommonArrayInput>
            <KeyValue directValue={false} objKey="validation" value={
                <ChildBracket>
                    <KeyValue directValue={false} objKey="min" value={
                        <ChildBracket>
                            <KeyComment comment="Specific error message"/>
                            <KeyValue newCode objKey="message" value='"We need you to have at least 18",'/>
                            <KeyValue objKey="value" value="18"/>
                        </ChildBracket>
                    } />
                </ChildBracket>
            }/>
        </CommonArrayInput>
        <p className="description">
            You can combine both kind of error message without any issue. Just keep this in mind.
            The specific one takes priority on general one.
        </p>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element.
            We will also display the error message if an input is touched and is not valid.
        </p>
        <InputArrayLine/>
        <p className="description">
            That is it. The value entered by the user will be stored in corresponding
            <span className="hl">
                <span>ip.</span><span className="oKey">value</span>
            </span>
            located in <span className="hl">myInputs</span>.
        </p>
        <FormRef/>
        <p className="description">
            All inputs properties like name,
            type and others are listed <Link className="link" to={routes.PROPERTIES_INPUTS}>HERE</Link>.<br/>
            All validation properties like min, max and
            others are listed <Link className="link" to={routes.PROPERTIES_VALIDATIONS}>HERE</Link>.<br/>
        </p>
    </>
}

export default MixedArray