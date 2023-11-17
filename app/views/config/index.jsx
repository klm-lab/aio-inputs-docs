import {Link, useNavigate} from "@remix-run/react";
import {getAnchor} from "../../util";
import Line from "../../components/line";
import Code from "../../components/code";
import Create from "../../components/codeComponents/create";
import PageButton from "../../components/pageButton";
import {routes} from "../../util/constants";
import KeyValue, {ChildBracket} from "../../components/codeComponents/keyValue";
import DotProperty from "../../components/codeComponents/dotProperty";
import CallDefinition from "../../components/codeComponents/callDefinition";

const {
    CONFIG: {ASYNC_DELAY, PERSIST_ID, TRACK_ID},
    TRACK, FORM
} = routes

const ConfigEntry = () => {
    const navigate = useNavigate();

    return <div className="data">
        <h1 id={getAnchor(ASYNC_DELAY)} className="title smt">Config</h1>
        <p className="description">
            This an optional configuration file to change the behaviour of <span
            className="package hl">aio-inputs</span>. you can config these properties:
        </p>
        <ul className="extra item-space">
            <li><span className="oKey hl">asyncDelay</span> asynchronous validation waiting time when user stops typing.</li>
            <li><span className="oKey hl">persistID</span> persist data on component unmount with this ID.</li>
            <li><span className="oKey hl">trackID</span> access your inputs outside a component with this ID.</li>
        </ul>
        <Line/>
        <h2 className="subTitle">
            Async delay
        </h2>
        <p className="description">
            Use <span className="hl oKey">asyncDelay</span> to set the time to wait before calling your asynchronous
            validation function when user stops typing.<br/>
            The default value on inputs creation is <span className="hl">800ms</span>.
            You can change <span className="hl oKey">asyncDelay</span> by passing its value in a config file as
            second argument of <CallDefinition hl name="useInputs"/>.</p>
        <Code>
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
        <Code>
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
        <Code>
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
            Hit next to find out how to <Link aria-label={"To setup a tracking tool"} className="link" to={TRACK.ROOT}>SETUP TRACKING TOOL</Link> and know more
            of it.
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(FORM.ROOT)} text="Prev"/>
            <PageButton onClick={() => navigate(TRACK.ROOT)}/>
        </div>
    </div>
}

export default ConfigEntry

