import {EDIT_LINK, getMeta, LIB_NAME, routes} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import CallDefinition from "../components/codeComponents/callDefinition";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        `Use Inputs edit examples, documentation for react ${LIB_NAME}`,
        "input edit examples, fast and powerful library inputs state management for react."
        , ROOT + EDIT);
};

const {EXAMPLES: {ROOT, FILE, EDIT}, TYPES} = routes

export const EditExamples = () => {

    return <div className="data">
        <h1 className="title">Load value for an EDIT</h1>
        <p className="description">Use <CallDefinition name="initValue" hl params=" input value "/> to load
            value into corresponding inputs.</p>
        <Line/>
        <h2 className="subTitle">
            Load value
        </h2>
        <p className="description">
            This example will show how to populate your inputs value for example an edit.
            For a file, you can also a third optional argument, an asynchronous function
            and retrieve a blob from your file url. Your function must take an url as param and return a promise.</p>
        <Iframe height={600} title="Load value example" src={EDIT_LINK}/>
        <p className="description">
            Go the next step to find out how to use some built-in types
        </p>
        <div className="foot">
            <PageButton to={ROOT + FILE} prev/>
            <PageButton to={TYPES} prev/>
        </div>
    </div>
}

export default EditExamples
