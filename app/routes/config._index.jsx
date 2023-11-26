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
import DotProperty from "../components/codeComponents/dotProperty";
import PageButton from "../components/pageButton";

const {
    CONFIG: {ROOT, ASYNC_DELAY, PERSIST_ID, TRACK_ID, LOCK_VALUES_ON_ERROR},
    TRACK, FORM
} = routes

export const meta = () => {
    return getMeta(
        "Inputs configuration state management configuration documentation for react aio-inputs",
        "Configuration for persist data, asynchronous validation and tracking. Best, simple, fast and powerful library inputs state management for react.",
        ROOT);
};

export const Config = () => {
    useRedirect(ROOT, LOCK_VALUES_ON_ERROR);
    return <div className="data">
        <h1 id={getAnchor(LOCK_VALUES_ON_ERROR)} className="title smt">Config</h1>
        <p className="description">
            This an optional configuration file to change the behaviour of <span
            className="package hl">aio-inputs</span>. you can config these properties:
        </p>
        <ul className="extra item-space">
            <li><span className="oKey hl">lockValuesOnError</span> if set to
                true, <AppLink
                    aria-label="Navigate to get values method"
                    to={FORM.ROOT + FORM.GET_VALUES}
                    className="link">GET VALUES</AppLink> returns null.
            </li>
            <li><span className="oKey hl">asyncDelay</span> asynchronous validation waiting time when user stops typing.
            </li>
            <li><span className="oKey hl">persistID</span> persist data on component unmount with this ID.</li>
            <li><span className="oKey hl">trackID</span> access your inputs outside a component with this ID.</li>
        </ul>
        <Line/>
        <h2 className="subTitle">
            Lock values on error
        </h2>
        <p className="description">
            Use <span className="hl oKey">lockValuesOnError</span> to
            make <AppLink
            aria-label="Navigate to get values method"
            to={FORM.ROOT + FORM.GET_VALUES}
            className="link">GET VALUES</AppLink> returns null when all your inputs are invalid.</p>
        <Code copyText={CONFIG_CODE.LOCK_VALUES_ON_ERROR}>
            <Create close form>
                yourInputs <span>,</span>
                <ChildBracket inline stop={false} noIndent>
                    <KeyValue objKey="lockValuesOnError" value="true"/>
                </ChildBracket>
            </Create>
        </Code>
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
            You can persist data on component unmount with a persistID.
            <span className="hl oKey">persistID</span> must be a unique ID throughout your application,
            and must not change during the component's lifetime.</p>
        <Code copyText={CONFIG_CODE.PERSIST_ID}>
            <Create close form>
                yourInputs <span>,</span>
                <ChildBracket inline stop={false} noIndent>
                    <KeyValue objKey="persistID" value='"myUniqueId"'/>
                </ChildBracket>
            </Create>
        </Code>

        <h2 id={getAnchor(TRACK_ID)} className="subTitle smt">
            Track ID
        </h2>
        <p className="description">
            You can also access your inputs data outside a component. For that, you need
            to setup a tracking tool and add corresponding ID to your inputs.
            An example of a <span className="hl oKey">trackID</span>.</p>
        <Code copyText={CONFIG_CODE.TRACK_ID}>
            <Create close form>
                yourInputs <span>,</span>
                <ChildBracket inline stop={false} noIndent>
                    <KeyValue objKey="trackID" directValue={false} value={
                        <DotProperty name="trackingTool" value="MY_ID" method={false}/>
                    }/>
                </ChildBracket>
            </Create>
        </Code>

        <p className="description">
            Hit next to find out how to <AppLink aria-label={"To setup a tracking tool"} className="link"
                                                 to={TRACK.ROOT}>SETUP TRACKING TOOL</AppLink> and know more
            of it.
        </p>
        <div className="foot">
            <PageButton to={FORM.ROOT + FORM.ON_SUBMIT} prev/>
            <PageButton to={TRACK.ROOT}/>
        </div>
    </div>
}

export default Config
