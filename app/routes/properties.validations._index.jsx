import {commonPropMeta} from "./properties._index";
import {LIB_NAME, routes} from "../util/constants";
import Code from "../components/code";
import Bracket from "../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import {TopComment} from "../components/codeComponents/create";
import {PROPERTIES_CODE} from "../code";
import PageButton from "../components/pageButton";
import ConsoleLog from "../components/codeComponents/consoleLog";


const {
    PROPERTIES: {VALIDATIONS, ROOT, INPUTS}, EXAMPLES
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + VALIDATIONS)
};

const Custom = ({async}) => {
    return <>
        <CallDefinition anonymous params={async ? "value, onSuccess, onError" : "value"} arrow/>
        <ChildBracket>
            <TopComment comment="make your validation"/>
            <div className="codeLine">
                {async ?
                    <>
                        <CallDefinition noIndent name="callServer" params={"value"}/>
                        <div className="">
                            <span className="no-indent">.</span>
                            <CallDefinition name="then" params={
                                <span className="no-indent">
                                    <span>{'valid =>'}</span>
                                    <CallDefinition noIndent name="onSuccess" params={
                                        <span className="no-indent">
                                    <span>valid ?</span>
                                    <span className="keyword">null</span>
                                    <span className="no-indent">: "new error message"</span>
                                </span>
                                    }/>
                                </span>
                            }/>


                        </div>
                        <span className="no-indent">.</span>
                        <CallDefinition name="catch" params={
                            <span className="no-indent">
                                    <span>{'error =>'}</span>
                                    <ChildBracket stop={false} inline noIndent>
                                       <div className="codeLine">
                                            <CallDefinition name="onError"/>
                                       </div>
                                         <ConsoleLog noCall name="error"/>
                                    </ChildBracket>
                                </span>
                        }/>
                    </>
                    :
                    <>
                        <span className="keyword">return</span>
                        <span>valueIsValid ?</span>
                        <span className="keyword">null</span>
                        <span>:</span>
                        <span>"new error message"</span>
                    </>
                }
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
                        <Fn async={async}/>
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
            These validations properties are external, available for your convenience and will be part of your final bundle if you use them.<br/>
            Add them according to the order in which you want to apply your validations. Every property is a function that can be imported from <span className="package hl">{LIB_NAME}</span> except
            the custom property.<br/>
            You have to write your custom validation function. If it returns something, it have to be an error message.
        </p>

        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space">
            <li><CallProperty name="required" hl/> takes an error message</li>
            <li><CallProperty name="email" hl/> takes an errorMessage</li>
            <li><CallProperty name="number" hl/> takes an errorMessage</li>
            <li><CallProperty name="min" hl/> takes a minimum acceptable value, an errorMessage and an optional boolean argument to validate as number</li>
            <li><CallProperty name="max" hl/> takes a maximum acceptable value, an errorMessage and an optional boolean argument to validate as number</li>
            <li><CallProperty name="match" hl/> copy and share same value and validations from another input. This is a
                typically password and confirmPassword use case. takes an input name to match and an errorMessage.
            </li>
            {/*<li><CallProperty name="copy" hl/> copy validations from another input. It takes an input name and an array*/}
            {/*    of omitted validation key*/}
            {/*    <CustomCode Fn={CopyFn} async='"input name")' name="copy" copyText={PROPERTIES_CODE.COPY}/>*/}
            {/*    And if you want to omit for example <CallProperty name="min" hl/>*/}
            {/*    <CustomCode Fn={CopyFn} async='"input name", ["min"])' name="copy"*/}
            {/*                copyText={PROPERTIES_CODE.COPY_OMIT}/>*/}
            {/*</li>*/}
            <li><CallProperty name="custom" hl/>must be a synchronous function that takes the
                value entered by the user and return an error message or null.
                <CustomCode Fn={Custom} name="custom" copyText={PROPERTIES_CODE.VALIDATIONS_CUSTOM()}/>
            </li>
            <li><CallProperty name="asyncCustom" hl/> must be a function that should be called last in your validations. It takes the
                value entered by the user, a success callback and an error callback. .
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
