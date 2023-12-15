import {commonPropMeta} from "./properties._index";
import {routes} from "../util/constants";
import Code from "../components/code";
import Bracket from "../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import {TopComment} from "../components/codeComponents/create";
import {PROPERTIES_CODE} from "../code";
import PageButton from "../components/pageButton";


const {
    PROPERTIES: {VALIDATIONS, ROOT, INPUTS}, EXAMPLES
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + VALIDATIONS)
};

const Custom = ({async}) => {
    return <>
        <CallDefinition async={async} anonymous params="value" arrow/>
        <ChildBracket>
            <TopComment comment="make your validation"/>
            <div className="codeLine">
                <span className="keyword">return</span>
                <span>valueIsValid ?</span>
                <span className="keyword">null</span>
                <span>:</span>
                <span>"new error message"</span>
            </div>
        </ChildBracket>
    </>
}

const CustomCode = ({async, copyText, name, Fn}) => {
    return <Code copyText={copyText}>
        <Bracket>
            <KeyValue objKey="validation" directValue={false} value={
                <ChildBracket>
                    <KeyValue objKey={name} directValue={false} value={
                        <>
                            {async && <span className="no-indent">{name}(</span>}
                            <Fn async={async}/>
                        </>
                    }/>
                </ChildBracket>
            }/>
        </Bracket>
    </Code>
}

const CopyFn = ({async}) => {
    return <span>{async}</span>
}

export const Properties = () => {
    return <div className="data">
        <h1 className="title smt">Validations properties</h1>
        <p className="description">
            These validations properties are available for your convenience.
            You have full control over them.
            Every property is a function that can be imported from <span className="package hl">aio-inputs</span> except the custom property.
            You have to write your custom validation function.
        </p>

        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space">
            <li><CallProperty name="required" hl/> takes an optional error message</li>
            <li><CallProperty name="email" hl/> takes an optional errorMessage</li>
            <li><CallProperty name="number" hl/> takes an optional errorMessage</li>
            <li><CallProperty name="min" hl/> takes a minimum acceptable value and an optional errorMessage</li>
            <li><CallProperty name="max" hl/> takes a maximum acceptable value and an optional errorMessage</li>
            <li><CallProperty name="minLength" hl/> takes a minimum length and an optional errorMessage</li>
            <li><CallProperty name="maxLength" hl/> takes a maximum length and an optional errorMessage</li>
            <li><CallProperty name="minLengthWithoutSpace" hl/> takes a minimum length without space and an optional
                errorMessage
            </li>
            <li><CallProperty name="maxLengthWithoutSpace" hl/> takes a maximum length without space and an optional
                errorMessage
            </li>
            <li><CallProperty name="startsWith" hl/> takes the startsWith value and an optional errorMessage</li>
            <li><CallProperty name="endsWith" hl/> takes the endWith value and an optional errorMessage</li>
            <li><CallProperty name="regex" hl/> takes the regex expression and an optional errorMessage. <CallDefinition
                name="test" hl/> method will be used with that regex
            </li>
            <li><CallProperty name="match" hl/> copy and share same value and validations from another input. This is a
                typically password and confirmPassword use case. takes an input name to match and an optional
                errorMessage.
            </li>
            <li><CallProperty name="copy" hl/> copy validations from another input. It takes an input name and an array
                of omitted validation key
                <CustomCode Fn={CopyFn} async='"input name")' name="copy" copyText={PROPERTIES_CODE.COPY}/>
                And if you want to omit for example <CallProperty name="minLength" hl/>
                <CustomCode Fn={CopyFn} async='"input name", ["minLength"])' name="copy"
                            copyText={PROPERTIES_CODE.COPY_OMIT}/>
            </li>
            <li><CallProperty name="custom" hl/>must be a synchronous function that takes the
                value entered by the user and return an error message or null.
                <CustomCode Fn={Custom} name="custom" copyText={PROPERTIES_CODE.VALIDATIONS_CUSTOM()}/>
            </li>
            <li><CallProperty name="asyncCustom" hl/> takes an asynchronous function. Works like the custom
                one but have to return a <span className="hl">
                    Promise
                     <span className="no-indent">{"<"}</span>
                <span className="no-indent keyword">boolean</span>
                <span className="no-indent">{">"}</span>
                </span>
                <CustomCode Fn={Custom} name="asyncCustom" async copyText={PROPERTIES_CODE.VALIDATIONS_CUSTOM(true)}/>
            </li>

        </ul>
        <div className="foot">
            <PageButton to={ROOT + INPUTS} prev/>
            <PageButton to={EXAMPLES.ROOT + EXAMPLES.TEXT}/>
        </div>
    </div>
}

export default Properties
