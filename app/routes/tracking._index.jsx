import {getMeta, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";
import {getAnchor} from "../util";
import AppLink from "../components/appLink";
import CallDefinition from "../components/codeComponents/callDefinition";
import Line from "../components/line";
import ImportStatement from "../components/codeComponents/importStatement";
import {TRACK_CODE} from "../code";
import Code from "../components/code";
import Create, {ArrayParams, TopComment} from "../components/codeComponents/create";
import DotProperty from "../components/codeComponents/dotProperty";
import PageButton from "../components/pageButton";

const {
    CONFIG,
    TRACK: {ROOT, TRACKING_TOOL, USE_VALUES, IS_VALID}, FORM, PROPERTIES
} = routes;
export const meta = () => {

    return getMeta(
        "Track Inputs values in external component ,documentation for react aio-inputs",
        "track, id, useValues, hook, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT);
};

const Usage = ({name}) => {
    return <Code copyText={TRACK_CODE.USE_TRACK(name)}>
        <TopComment comment={name}/>
        <div className="codeLine">
            <DotProperty name="myCustomInputs" value={name}/>
        </div>
    </Code>
}

export const Track = () => {
    useRedirect(ROOT, TRACKING_TOOL);
    return <div className="data">
        <h1 id={getAnchor(TRACKING_TOOL)} className="title smt">Tracking</h1>
        <p className="description">
            To access your inputs data outside a component, you need to create it outside. The result inherit every
            method available on the <AppLink
            aria-label={"To show the form utility"}
            className="link" to={FORM.ROOT}>FORM</AppLink> object, and have two new property
        </p>
        <ul className="extra item-space">
            <li><CallDefinition name="useValues" hl/> a hook to sync a component with your inputs values.</li>
            <li><CallDefinition name="isValid" hl/> a method to check the validity of your inputs.</li>
        </ul>
        <Line/>
        <ImportStatement copyText={TRACK_CODE.IMPORT} title="Tracking tool" name={"trackInputs"}/>
        <h3 className="subTitle-3">
            Create your inputs hook
        </h3>
        <p className="description">
            <CallDefinition name="trackInputs" hl/> works exactly like <CallDefinition name="useInputs" hl/>. The
            difference is that <CallDefinition name="trackInputs" hl/> return
            a <CallDefinition name="useInputs" hl/> that inherit every
            method available on the <AppLink
            aria-label={"To show the form utility"}
            className="link" to={FORM.ROOT}>FORM</AppLink> object.
        </p>
        <Code copyText={TRACK_CODE.CREATE}>
            <Create close oneConst="myCustomInputs" imported="trackInputs" array>
                <ArrayParams params={["name", "gender"]}/>
            </Create>
        </Code>
        <h3 className="subTitle-3">
            Use your custom inputs hook
        </h3>

        <Code copyText={TRACK_CODE.TRACKING}>
            <Create form close imported="myCustomInputs" value=""/>
        </Code>

        <h2 id={getAnchor(USE_VALUES)} className="subTitle smt">
            Use values
        </h2>
        <p className="description">
            <CallDefinition name="useValues" hl/> is a hook for sharing your inputs values in real-time with
            other components.
        </p>
        <Usage name="useValues"/>

        <h2 id={getAnchor(IS_VALID)} className="subTitle smt">
            IsValid
        </h2>
        <p className="description">
            <CallDefinition name="isValid" hl/> is a method to check the validity of your inputs.
        </p>
        <Usage name="isValid"/>

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
