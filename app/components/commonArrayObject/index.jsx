import KeyValue, {ChildBracket} from "../codeComponents/keyValue";
import InputArrayLine from "../codeComponents/inputArrayLine";
import DotProperty from "../codeComponents/dotProperty";
import FormRef from "../FormRef";
import {routes} from "../../util/constants";
import AppLink from "../appLink";
import CallDefinition from "../codeComponents/callDefinition";

const {PROPERTIES} = routes;

const CommonArrayObject =
    ({
         Component,
         errorMessage,
         validation,
         value,
         arrayLineName,
         copySpecText,
         inlineText,
        method
     }) => {
        return <>
            <Component copyText={copySpecText}>
                <KeyValue directValue={false} objKey="validation" value={
                    <ChildBracket>
                        <KeyValue objKey={validation} value={<CallDefinition name={validation} params={value + `, "${errorMessage}"`}/>} comment={
                            <span className="comment"> {`// ${validation} validation`}</span>
                        }/>
                    </ChildBracket>
                }/>
            </Component>
            <p className="description">
                Now bind <span className="hl">myInputs</span>, to some input element.
                We will also display the error message if an input is touched and is not valid.
            </p>
            <InputArrayLine method={method} inlineText={inlineText} name={arrayLineName}/>
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