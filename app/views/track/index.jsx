import {getAnchor} from "../../util";
import Line from "../../components/line";
import Code from "../../components/code";
import Create, {ArrayParams, TopComment} from "../../components/codeComponents/create";
import KeyValue, {ChildBracket} from "../../components/codeComponents/keyValue";
import DotProperty from "../../components/codeComponents/dotProperty";
import PageButton from "../../components/pageButton";
import {routes} from "../../util/constants";
import ImportStatement from "../../components/codeComponents/importStatement";
import CallDefinition from "../../components/codeComponents/callDefinition";
import AppLink from "../../components/appLink";

const {
    CONFIG,
    TRACK: {TRACKING_TOOL, USE_VALUES, LENGTH}, FORM, PROPERTIES
} = routes;

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
        <Code>
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
        <Code>
            <TopComment comment="For All inputs"/>
            <div className="codeLine">
                <DotProperty name="trackingTool" value={name}/>
            </div>
        </Code>
    </>
}

const TrackEntry = () => {

    return <div className="data">
        <h1 id={getAnchor(TRACKING_TOOL)} className="title smt">Tracking</h1>
        <p className="description">
            To access your inputs data outside a component, you need a tracking tool.
            A tracking tool inherit every method available on <AppLink aria-label={"To show the form utility"}
                                                                       className="link" to={FORM.ROOT}>
            FORM
        </AppLink> and has his own <CallDefinition name="length" hl/> method.
        </p>
        <Line/>
        <ImportStatement title="Tracking tool" name={"trackInputs"}/>
        <h3 className="subTitle-3">
            Create your tracking tool
        </h3>
        <p className="description">
            It takes an array of id as arguments. They don't need to be unique. You can create in top of your component
            or in any external file. It doesn't matter.
        </p>
        <Code>
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
        <Code>
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
        <Code>
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

export default TrackEntry