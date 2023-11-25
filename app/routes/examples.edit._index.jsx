import {EDIT_LINK, getMeta, routes} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        "Use Inputs edit examples, documentation for react aio-inputs",
        "input edit examples, fast and powerful library inputs state management for react."
        , ROOT + EDIT);
};

const {EXAMPLES: {ROOT, FILE,EDIT},TYPES} = routes

export const EditExamples = () => {

    return <div className="data">
        <h1 className="title">Load value for an EDIT</h1>
        <p className="description">Use <CallDefinition name="initValue" hl params=" input value "/> to load
            value into corresponding inputs.</p>
        <Line/>
        <h2 className="subTitle">
            Load value
        </h2>
        <p className="description">You can config a <CallProperty name="getBlob" hl/> property as a function
            and retrieve a blob from any file url. Your function must take an url as a pram and return a <CallProperty
                name="blob"/> or
            a <CallProperty name="Promise<Blob>"/>.</p>
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
