import {getMeta, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";
import {getAnchor} from "../util";
import AppLink from "../components/appLink";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import Line from "../components/line";
import ImportStatement from "../components/codeComponents/importStatement";
import {TRACK_CODE} from "../code";
import Code from "../components/code";
import Create, {ArrayParams, TopComment} from "../components/codeComponents/create";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import DotProperty from "../components/codeComponents/dotProperty";
import PageButton from "../components/pageButton";

const {
    CONFIG,
    TRACK: {ROOT, TRACKING_TOOL, USE_VALUES, LENGTH}, FORM, PROPERTIES
} = routes;
export const meta = () => {

    return getMeta(
        "Track Inputs values in external component ,documentation for react aio-inputs",
        "track, id, useValues, hook, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT);
};

const BIND = [
    {comment: "Component 1", value: "INPUT_ONE"},
    {comment: "Component 2", value: "INPUT_TWO", space: true},
    {comment: "Component 3", value: "MY_ID", space: true}
]

const Usage = ({name}) => {
    return <>
        <ul className="extra">
            <li>For each tracked input <span className="hl oKey">INPUT_ONE, INPUT_TWO and MY_ID</span></li>
        </ul>
        <Code copyText={TRACK_CODE.USE_TRACK(name)}>
            {BIND.map(b => {
                return <span key={b.comment}>
                    <TopComment comment={`For ${b.value}`} space={b.space}/>
                    <div className="codeLine">
                        <DotProperty name="trackingTool" value={
                            <DotProperty name={b.value} value={name}/>
                        } method={false}/>
                    </div>
                </span>
            })}
        </Code>
        <ul className="extra">
            <li>For all inputs at once</li>
            <p className="description">Use this with caution. Make sure inputs name across your tracked inputs are
                different from each other.</p>
        </ul>
        <Code copyText={TRACK_CODE.USE_TRACK_G(name)}>
            <TopComment comment="For All inputs"/>
            <div className="codeLine">
                <DotProperty name="trackingTool" value={name}/>
            </div>
        </Code>
    </>
}

export const Track = () => {
    useRedirect(ROOT, TRACKING_TOOL);
    return <div className="data">
        <h1 id={getAnchor(TRACKING_TOOL)} className="title smt">Tracking</h1>
        <p className="description">
            To access your inputs data outside a component, you need a tracking tool. A tracking tool inherit every
            method available on the <AppLink
            aria-label={"To show the form utility"}
            className="link" to={FORM.ROOT}>FORM</AppLink> object with one change.
        </p>
        <ul className="extra">
            <li>
                The <CallProperty name="length" hl/> property in a
                tracking tool is a function.
            </li>
        </ul>
        <Line/>
        <ImportStatement copyText={TRACK_CODE.IMPORT} title="Tracking tool" name={"trackInputs"}/>
        <h3 className="subTitle-3">
            Create your tracking tool
        </h3>
        <p className="description">
            It takes an array of id as arguments. They don't need to be unique. You can create in top of your component
            or in any external file. It doesn't matter.
        </p>
        <Code copyText={TRACK_CODE.CREATE}>
            <Create close oneConst="trackingTool" imported="trackInputs" array>
                <ArrayParams params={["INPUT_ONE", "INPUT_TWO", "MY_ID"]}/>
            </Create>
        </Code>
        <h3 className="subTitle-3">
            Bind your tracking tool
        </h3>
        <p className="description">
            Add accordingly the <span className="hl oKey">trackID</span> property on inputs you want to track.
        </p>
        <Code copyText={TRACK_CODE.TRACKING}>
            {BIND.map(b => {
                return <span key={b.comment}>
                    <TopComment comment={b.comment} space={b.space}/>
                    <Create close>
                        yourInputs <span>,</span>
                        <ChildBracket inline stop={false} noIndent>
                            <KeyValue objKey="trackID" directValue={false} value={
                                <DotProperty name="trackingTool" value={b.value} method={false}/>
                            }/>
                        </ChildBracket>
                    </Create>
                </span>
            })}
        </Code>

        <h3 className="subTitle-3">
            Use your tracking tool
        </h3>
        <p className="description">For example to get your inputs values,</p>
        <Usage name="getValues"/>
        <p className="description">
            A tracking tool inherit every method available on <AppLink aria-label={"To show the form utility"}
                                                                       className="link" to={FORM.ROOT}>
            FORM
        </AppLink> and has his own <CallDefinition name="length" hl/> method.
        </p>
        <p className="description">
            Therefor calling <CallDefinition name="reset" hl/> and other method will work.
        </p>

        <h2 id={getAnchor(USE_VALUES)} className="subTitle smt">
            Use values
        </h2>
        <p className="description">
            <CallDefinition name="useValues" hl/> is a hook for sharing your inputs values in real-time with
            other components. It is available for all inputs at once and for each input.
            Call it like <CallDefinition name="getValues" hl/> and other method.
        </p>
        <Usage name="useValues"/>
        <h2 id={getAnchor(LENGTH)} className="subTitle smt">
            Length
        </h2>
        <p className="description">
            <DotProperty name="trackingTool" value="length" hl/> get the length of your all tracked inputs.
            For each tracked inputs the length is a property not a method (Function).
        </p>
        <Code copyText={TRACK_CODE.LENGTH}>
            <TopComment comment="Each input"/>
            <div className="codeLine">
                <DotProperty name="trackingTool" value={
                    <DotProperty name="INPUT_ONE" value="length" method={false}/>
                } method={false}/>
            </div>
            <TopComment comment="All inputs"/>
            <div className="codeLine">
                <DotProperty name="trackingTool" value="length"/>
            </div>
        </Code>
        <p className="description">
            Hit next to know more about all available <AppLink aria-label={"To show all available properties"}
                                                               className="link"
                                                               to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>PROPERTIES</AppLink>
        </p>
        <div className="foot">
            <PageButton to={CONFIG.ROOT} prev/>
            <PageButton to={PROPERTIES.ROOT + PROPERTIES.INPUTS}/>
        </div>
    </div>
}

export default Track
