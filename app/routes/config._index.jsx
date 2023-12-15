import {getMeta, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";
import {getAnchor} from "../util";
import AppLink from "../components/appLink";
import Line from "../components/line";
import Code from "../components/code";
import {CONFIG_CODE} from "../code";
import Create from "../components/codeComponents/create";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import CallDefinition from "../components/codeComponents/callDefinition";
import PageButton from "../components/pageButton";

const {
    CONFIG: {ROOT, ASYNC_DELAY, PERSIST_ID},
    TRACK, FORM
} = routes

export const meta = () => {
    return getMeta(
        "Inputs configuration state management configuration documentation for react aio-inputs",
        "Configuration for persist data, asynchronous validation and tracking. Best, simple, fast and powerful library inputs state management for react.",
        ROOT);
};

export const Config = () => {
    useRedirect(ROOT, ASYNC_DELAY);
    return <div className="data">
        <h1 id={getAnchor(ASYNC_DELAY)} className="title smt">Config</h1>
        <p className="description">
            This an optional configuration file to change the behaviour of <span
            className="package hl">aio-inputs</span>. You can config these properties:
        </p>
        <ul className="extra item-space">
            <li><span className="oKey hl">asyncDelay</span> asynchronous validation waiting time when user stops typing.
            </li>
            <li><span className="oKey hl">pid</span> persist data on component unmount with this ID.</li>
        </ul>
        <Line/>
        <h2 id={getAnchor(ASYNC_DELAY)} className="subTitle smt">
            Async delay
        </h2>
        <p className="description">
            Use <span className="hl oKey">asyncDelay</span> to set the time to wait before calling your asynchronous
            validation function when user stops typing.<br/>
            The default value on inputs creation is <span className="hl">800ms</span>.
            You can change <span className="hl oKey">asyncDelay</span> by passing its value in a config file as
            second argument of <CallDefinition hl name="useInputs"/>.</p>
        <Code copyText={CONFIG_CODE.ASYNC_DELAY}>
            <Create close form>
                yourInputs <span>,</span>
                <ChildBracket inline stop={false} noIndent>
                    <KeyValue objKey="asyncDelay" comment="// The type is number" value="800"/>
                </ChildBracket>
            </Create>
        </Code>
        <h2 id={getAnchor(PERSIST_ID)} className="subTitle smt">
            Persist ID
        </h2>
        <p className="description">
            You can persist data on component unmount with a pid.
            <span className="hl oKey">pid</span> must be a unique ID throughout your application,
            and must not change during the component's lifetime.</p>
        <Code copyText={CONFIG_CODE.PERSIST_ID}>
            <Create close form>
                yourInputs <span>,</span>
                <ChildBracket inline stop={false} noIndent>
                    <KeyValue objKey="pid" value='"myUniqueId"'/>
                </ChildBracket>
            </Create>
        </Code>

        <p className="description">
            Hit next to find out how to <AppLink aria-label={"To setup a tracking tool"} className="link"
                                                 to={TRACK.ROOT}>TRACK YOUR INPUTS</AppLink> outside a component.
        </p>
        <div className="foot">
            <PageButton to={FORM.ROOT + FORM.ON_SUBMIT} prev/>
            <PageButton to={TRACK.ROOT}/>
        </div>
    </div>
}

export default Config
