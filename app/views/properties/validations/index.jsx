import Code from "../../../components/code";
import {routes} from "../../../util/constants";
import PageButton from "../../../components/pageButton";
import CallDefinition, {CallProperty} from "../../../components/codeComponents/callDefinition";
import Bracket from "../../../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../../../components/codeComponents/keyValue";
import {CommonSyntax} from "../inputs";
import Create, {ArrayParams, TopComment} from "../../../components/codeComponents/create";

const {
    PROPERTIES: {INPUTS, ROOT},
} = routes;


const CustomCode = ({async}) => {
    return <Code>
        <Bracket>
            <KeyValue objKey="validation" directValue={false} value={
                <ChildBracket>
                    <KeyValue objKey="custom" directValue={false} value={
                        <>
                            <CallDefinition async={async} anonymous params="value, setErrorMessage" arrow/>
                            <ChildBracket>
                                <TopComment comment="make your validation"/>
                                <div className="codeLine">
                                    <CallDefinition name="setErrorMessage"/>
                                </div>
                                <div className="codeLine">
                                    <span className="keyword">return</span>
                                    <span className="keyword">false</span>
                                </div>
                            </ChildBracket>
                        </>
                    }/>
                </ChildBracket>
            }/>
        </Bracket>
    </Code>
}

const ValidationsProperties = () => {

    return <div className="data">
        <h1 className="title smt">Validations properties</h1>
        <p className="description">
            These validations properties are available for your convenience. You have full control over them.
        </p>
        <CommonSyntax pre={"specific error message"} name="message"/>

        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space">
            <li><CallProperty name="required" hl/> Make the value required <span
                className="hl">boolean</span></li>
            <li><CallProperty name="email" hl/> Treat the value as email <span
                className="hl">boolean</span></li>
            <li><CallProperty name="number" hl/> Treat the value as number <span
                className="hl">boolean</span></li>
            <li><CallProperty name="min" hl/> minimum acceptable value <span
                className="hl">number</span></li>
            <li><CallProperty name="max" hl/> maximum acceptable value <span
                className="hl">number</span></li>
            <li><CallProperty name="minLength" hl/> value minimum length <span
                className="hl">number</span></li>
            <li><CallProperty name="maxLength" hl/> value maximum length <span
                className="hl">number</span></li>
            <li><CallProperty name="minLengthWithoutSpace" hl/> value minimum length without any space <span
                className="hl">number</span></li>
            <li><CallProperty name="maxLengthWithoutSpace" hl/> value maximum length without any space <span
                className="hl">number</span></li>
            <li><CallProperty name="startsWith" hl/> input have to start with that value <span
                className="hl">string</span></li>
            <li><CallProperty name="endsWith" hl/> input have to end with that value <span
                className="hl">string</span></li>
            <li><CallProperty name="regex" hl/> input regex validation. <CallDefinition name="test" hl/> will be used
                with that regex<span
                    className="hl">string</span></li>
            <li><CallDefinition name="custom" hl/> a synchronous validation function. It accepts two arguments.
                The first argument is the value entered by the user and the second is a method for updating the error
                message. It have to return a <span className="hl">boolean</span>
                <CustomCode/>
            </li>
            <li><CallDefinition name="asyncCustom" hl/> an asynchronous validation function. Works like the custom
                one but have to return a <span className="hl">
                    Promise
                     <span className="no-indent">{"<"}</span>
                <span className="no-indent keyword">boolean</span>
                <span className="no-indent">{">"}</span>
                </span>
                <CustomCode async/>
            </li>
            <li><CallProperty name="copy" hl/> copy validations from another input. It accepts a <span
                className="hl">string (INPUT ID)</span> or an object which let you omit the validation you don't want
                <Code>
                    <Create close array>
                        <div className="codeLine">
                            <ChildBracket>
                                <KeyValue objKey="id" value={`"name_id",`}/>
                                <KeyValue objKey="name" value={`"name",`}/>
                                <KeyValue directValue={false} objKey="validation" value={
                                    <ChildBracket>
                                        <KeyValue directValue={false} objKey="required" value={
                                            <span className="keyword">true,</span>
                                        }/>
                                        <KeyValue objKey="minLength" value="3,"/>
                                        <KeyValue objKey="maxLength" value="30,"/>
                                        <TopComment comment="Other validation"/>
                                    </ChildBracket>
                                }/>
                            </ChildBracket>
                            <ChildBracket>
                                <KeyValue objKey="name" value={`"firstname",`}/>
                                <KeyValue directValue={false} objKey="validation" value={
                                    <ChildBracket>
                                        <KeyValue objKey="copy" value={`"name_id"`}/>
                                    </ChildBracket>
                                }/>
                            </ChildBracket>
                        </div>
                    </Create>
                </Code>
                And if you want to omit for example <CallProperty name="maxLength" hl/>
                <Code>
                    <div className="codeLine">
                        <ChildBracket>
                            <KeyValue objKey="name" value={`"firstname",`}/>
                            <KeyValue directValue={false} objKey="validation" value={
                                <ChildBracket>
                                    <KeyValue directValue={false} objKey="copy" value={
                                        <ChildBracket>
                                            <KeyValue objKey="value" value={`"name_id",`}/>
                                            <KeyValue objKey="omit" value={
                                                <>
                                                    <span className="no-indent">[</span>
                                                    <ArrayParams params={["maxLength"]}/>
                                                    <span>]</span>
                                                </>
                                            }/>
                                        </ChildBracket>
                                    }/>
                                </ChildBracket>
                            }/>
                        </ChildBracket>
                    </div>
                </Code>
            </li>
            <li><CallProperty name="match" hl/> copy and share same value and validations from another input. This is a
                typically password and confirmPassword use case. It accepts a <span
                    className="hl">string (INPUT ID)</span>
            </li>
        </ul>
        <div className="foot">
            <PageButton to={ROOT + INPUTS} prev/>
        </div>
    </div>
}

export default ValidationsProperties