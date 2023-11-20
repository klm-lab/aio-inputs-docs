import Code from "../../../components/code";
import KeyValue, {ChildBracket} from "../../../components/codeComponents/keyValue";
import Bracket from "../../../components/codeComponents/bracket";
import Create from "../../../components/codeComponents/create";
import CommonArrayObject, {CommonProp} from "../../../components/commonArrayObject";
import {USE_INPUTS_CODE} from "../../../code";


const CommonObjectInput = ({children, copyText}) => {
    return <Code copyText={copyText}>
        <Create close form>
            <Bracket>
                <KeyValue directValue={false} objKey="name" value={
                    <ChildBracket>
                        {children}
                    </ChildBracket>
                }/>
                <KeyValue objKey="gender" value="{}"/>
            </Bracket>
        </Create>
    </Code>
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
        <CommonObjectInput copyText={USE_INPUTS_CODE.CREATE_OBJ}>
            <CommonProp value={3} validation="minLength"/>
        </CommonObjectInput>
        <CommonArrayObject
            inlineText={USE_INPUTS_CODE.FORM_INLINE}
            copyGenText={USE_INPUTS_CODE.OBJ_GEN_MESSAGE}
            copySpecText={USE_INPUTS_CODE.OBJ_SPEC_MESSAGE}
            Component={CommonObjectInput}
            value="3"
            name="name"
            validation="minLength"
            errorMessage="The name must have at least 3 characters"
            arrayLineName="form"
        />
    </>
}

export default ObjectValidation