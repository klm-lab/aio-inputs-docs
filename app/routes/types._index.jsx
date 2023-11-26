import {getMeta, routes} from "../util/constants";
import Line from "../components/line";
import Code from "../components/code";
import {TYPES_CODE} from "../code";
import PageButton from "../components/pageButton";
import {TopComment} from "../components/codeComponents/create";
import ImportCode from "../components/codeComponents/inportCode";
import CallDefinition from "../components/codeComponents/callDefinition";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import AppLink from "../components/appLink";

export const meta = () => {
    return getMeta(
        "Inputs types documentation for react aio-inputs",
        "Some built-in types. Best, simple, fast and powerful library inputs state management for react",
        TYPES);
};

const {EXAMPLES: {ROOT, EDIT}, TYPES,PROPERTIES,USE_INPUTS} = routes;

export default function Root() {
    return <div className="data">
        <h1 className="title">Built-In Types</h1>
        <p className="description">
            <span className="hl package">aio-inputs</span> has strong built-in types and properly infer type
            from your inputs.
        </p>
        <p className="description">
            The only reason for you to import these types is the benefit of autocompletion when you create your inputs
            in an external file or pass it as
            a props to another component. If so, use them types to make things easier.<br/>
        </p>
        <p className="description">
            But if you create your inputs directly in the <CallDefinition name="useInputs" hl/> hook, or as external
            variable,
            You won't need them. Trust us to properly infer type for you and focus on your logic 💭.
        </p>
        <Line/>
        <h2 className="subTitle">
            Creation Types
        </h2>
        <p className="description">
            When you create your inputs as an object or an Array.
        </p>
        <ul className="extra">
            <li>Array. <AppLink
                aria-label={"To see how to create array inputs"} to={
                USE_INPUTS.ROOT + USE_INPUTS.ARRAY
            } className="link">
                CREATE IT</AppLink></li>
        </ul>
        <Code copyText={TYPES_CODE.CREATE_ARRAY}>
            <TopComment comment="To type an Array of inputs"/>
            <ImportCode name={"CreateArrayInputs"}/>
            <div className="codeLine mt-1">
                <span className="keyword">const</span>
                <span>myInputs:</span>
                <span className="definition">CreateArrayInputs</span>
                <span>= [...]</span>
            </div>
        </Code>
        <ul className="extra">
            <li>Object. <AppLink
                aria-label={"To see how to create object inputs"} to={
                USE_INPUTS.ROOT + USE_INPUTS.OBJECT
            } className="link">
                CREATE IT</AppLink></li>
        </ul>
        <Code copyText={TYPES_CODE.CREATE_OBJECT}>
            <TopComment space comment="To type an Object of inputs"/>
            <ImportCode name={"CreateObjectInputs"}/>
            <div className="codeLine mt-1">
                <span className="keyword">const</span>
                <span>myInputs:</span>
                <span className="definition no-indent">CreateObjectInputs</span>
                <span>{"<'name' | 'age'>"} =</span>
                <ChildBracket>
                    <KeyValue objKey="name" value={'{...}'}/>
                    <KeyValue objKey="age" value={'{...}'}/>
                </ChildBracket>
            </div>
        </Code>
        <h2 className="subTitle">
            Output Types
        </h2>
        <p className="description">
            These types are available for created inputs. It is not for creating inputs.
            After calling <CallDefinition name="useInputs" hl/>, these are possible output types.
        </p>
        <ul className="extra">
            <li>Input. <AppLink
                aria-label={"To list all input properties"} to={
                PROPERTIES.ROOT + PROPERTIES.INPUTS
            } className="link">
                SHOW PROPERTIES</AppLink></li>
        </ul>
        <Code copyText={TYPES_CODE.OUTPUT_INPUT}>
            <TopComment comment="To type an Input"/>
            <ImportCode name={"Input"}/>
        </Code>
        <ul className="extra">
            <li>InputProps. They are part of input properties. <AppLink
                aria-label={"To list all input props properties"} to={
                PROPERTIES.ROOT + PROPERTIES.INPUTS_PROPS
            } className="link">
                SHOW PROPERTIES</AppLink>.</li>
        </ul>
        <Code copyText={TYPES_CODE.OUTPUT_INPUT_PROPS}>
            <TopComment comment="To type an InputProps"/>
            <ImportCode name={"InputProps"}/>
        </Code>
        <ul className="extra">
            <li>Array</li>
        </ul>
        <Code copyText={TYPES_CODE.OUTPUT_ARRAY}>
            <TopComment comment="To type an Array of inputs"/>
            <ImportCode name={"ArrayInputs"}/>
        </Code>
        <ul className="extra">
            <li>Object</li>
        </ul>
        <Code copyText={TYPES_CODE.OUTPUT_OBJECT}>
            <TopComment space comment="To type an Object of inputs"/>
            <ImportCode name={"ObjectInputs"}/>
            <div className="codeLine mt-1">
                <span className="definition no-indent">ObjectInputs</span>
                <span>{"<'name' | 'age'>"}</span>
            </div>
        </Code>
        <p className="flexCenterSpace description">
            <span/>
            <span className="bold">❤️ THANK YOU ❤️</span>
        </p>
        <div className="foot">
            <PageButton to={ROOT + EDIT} prev/>
        </div>
    </div>;
}
