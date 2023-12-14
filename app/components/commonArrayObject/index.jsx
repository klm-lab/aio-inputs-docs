import KeyComment from "../codeComponents/keyComment";
import KeyValue, {ChildBracket} from "../codeComponents/keyValue";
import InputArrayLine from "../codeComponents/inputArrayLine";
import DotProperty from "../codeComponents/dotProperty";
import FormRef from "../FormRef";
import {routes} from "../../util/constants";
import AppLink from "../appLink";
import CallDefinition from "../codeComponents/callDefinition";

const {PROPERTIES} = routes;

export const CommonProp = ({validation, value}) => {
    return <KeyValue directValue={false} objKey="validation" value={
        <ChildBracket>
            <KeyValue objKey={validation} value={<CallDefinition name={validation} params={value}/>} comment={
                <span className="comment"> {`// ${validation} validation`}</span>
            }/>
        </ChildBracket>
    }/>
}

const CommonArrayObject =
    ({
         Component,
         name,
         errorMessage,
         validation,
         value,
         arrayLineName,
         copyGenText,
         copySpecText,
         inlineText
     }) => {
        return <>
            <p className="description">
                Lets add some error message for {name} input to help the user. You can add two kind of error message:
            </p>
            <ul className="extra">
                <li>
                    A general one
                    <p className="sub-desc">A general errorMessage act like a summary of all possible errors that can
                        occur
                        when user types.</p>
                </li>
                <li>
                    A Specific one
                    <p className="sub-desc">A specific errorMessage is unique to each validation. You can import
                        validations
                        from <span className="package hl">aio-inputs</span> package</p>
                </li>
            </ul>
            <p className="description">
                Generally, if specific error message wasn't defined, the general one is used if it was defined.
                Specific error messages take priority on general ones. Let's add a general error message
            </p>
            <Component copyText={copyGenText}>
                <KeyComment comment="General error message"/>
                <KeyValue objKey="errorMessage" value={`"${errorMessage}",`}/>
                <CommonProp value={value} validation={validation}/>
            </Component>
            <p className="description">
                Let's add a specific error message for the <span className="hl oKey">{validation}</span> validation
                rule.
            </p>
            <Component copyText={copySpecText}>
                <CommonProp value={value + `, "${errorMessage}"`} validation={validation}/>
            </Component>
            <p className="description">
                You can combine both kind of error message without any issue. Just keep this in mind.
                The specific one takes priority on general one.
            </p>
            <p className="description">
                Now bind <span className="hl">myInputs</span>, to some input element.
                We will also display the error message if an input is touched and is not valid.
            </p>
            <InputArrayLine inlineText={inlineText} name={arrayLineName}/>
            <p className="description">
                That is it. The value entered by the user will be stored in corresponding
                <DotProperty name="ip" value="value" method={false} hl/>
                located in <span className="hl">myInputs</span>.
            </p>
            <FormRef/>
            <p className="description">
                <AppLink aria-label="To list available inputs properties" className="link"
                         to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>INPUTS PROPERTIES</AppLink> like name,
                type and many others are available.<br/>
                Same for <AppLink aria-label="To list available validations properties" className="link"
                                  to={PROPERTIES.ROOT + PROPERTIES.VALIDATIONS}>VALIDATION PROPERTIES</AppLink> like
                min, max and many others.<br/>
            </p>
        </>
    }

export default CommonArrayObject