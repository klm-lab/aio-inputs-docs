import Code from "../../../components/code";
import {Link} from "@remix-run/react";
import FormRef from "../../../components/FormRef";
import InputArrayLine from "../../../components/codeComponents/inputArrayLine";
import KeyValue, {ChildBracket} from "../../../components/codeComponents/keyValue";
import Bracket from "../../../components/codeComponents/bracket";
import {routes} from "../../../util/constants"
import CreateInputs from "../../../components/codeComponents/CreateInputs";
import KeyComment from "../../../components/codeComponents/keyComment";


const CommonObjectInput = ({children}) => {
    return <Code>
        <CreateInputs close form>
            <Bracket>
                <KeyValue directValue={false} objKey="name" value={
                    <ChildBracket>
                        {children}
                    </ChildBracket>
                }/>
                <KeyValue objKey="gender" value="{}"/>
            </Bracket>
        </CreateInputs>
    </Code>
}

const CommonNameVal = () => {
    return <KeyValue directValue={false} objKey="validation" value={
        <ChildBracket>
            <KeyValue directValue={false} objKey="minLength" value="3"/>
        </ChildBracket>
    }/>
}

const ObjectValidation = () => {

    return <>
        <h2 className="subTitle">
            Object with validation
        </h2>
        <p className="description">
            Let's add validation to one of those two inputs. <span className="hl">name</span> will have validation
            (minLength 3).
        </p>
        <CommonObjectInput>
            <CommonNameVal/>
        </CommonObjectInput>

        <p className="description">
            Let's also add some error message for age input to help the user. You can add tow kind of error message:
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
        <CommonObjectInput>
            <KeyComment comment="General error message"/>
            <KeyValue newCode objKey="errorMessage" value='"The name must have at least 3 characters",'/>
            <CommonNameVal/>
        </CommonObjectInput>
        <p className="description">
            Let's add a specific error message for the minLength validation rule
        </p>
        <CommonObjectInput>
            <KeyValue directValue={false} objKey="validation" value={
                <ChildBracket>
                    <KeyValue directValue={false} objKey="minLength" value={
                        <ChildBracket>
                            <KeyComment comment="Specific error message"/>
                            <KeyValue newCode objKey="message" value='"The name must have at least 3 characters",'/>
                            <KeyValue objKey="value" value="3"/>
                        </ChildBracket>
                    }/>
                </ChildBracket>
            }/>
        </CommonObjectInput>
        <p className="description">
            You can combine both kind of error message without any issue. Just keep this in mind.
            The specific one takes priority on general one.
        </p>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element.
            We will also display the error message if an input is touched and is not valid.
        </p>
        <InputArrayLine name={"form"}/>
        <p className="description">
            That is it. The value entered by the user will be stored in corresponding
            <span className="hl">
                <span>ip.</span><span className="oKey">value</span>
            </span>
            located in <span className="hl">myInputs</span>.
        </p>
        <FormRef/>
        <p className="description">
            All inputs properties like <span className="hl">name, type</span> and others are listed <Link
            className="link" to={routes.PROPERTIES_INPUTS}>HERE</Link>.<br/>
            All validation properties like <span className="hl">min, max</span> and
            others are listed <Link className="link" to={routes.PROPERTIES_VALIDATIONS}>HERE</Link>.<br/>
        </p>
    </>
}

export default ObjectValidation