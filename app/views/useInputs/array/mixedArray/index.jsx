import Code from "../../../../components/code";
import KeyValue from "../../../../components/codeComponents/keyValue";
import StringKey from "../../../../components/codeComponents/stringKey";
import Bracket from "../../../../components/codeComponents/bracket";
import Create from "../../../../components/codeComponents/create";
import CommonArrayObject, {CommonProp} from "../../../../components/commonArrayObject";

const CommonArrayInput = ({children}) => {
    return <Code>
        <Create array close>
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
        </Create>
    </Code>
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
            <CommonProp value={18} validation="min"/>
        </CommonArrayInput>
        <CommonArrayObject
            Component={CommonArrayInput}
            value={18}
            name="age"
            validation="min"
            errorMessage="We need you to have at least 18"
        />
    </>
}

export default MixedArray