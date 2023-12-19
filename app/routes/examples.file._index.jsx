import {FILE_CONTROL_LINK, FILE_LINK, getMeta, LIB_NAME, routes} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";
import CallDefinition from "../components/codeComponents/callDefinition";

export const meta = () => {

    return getMeta(
        `Use Inputs type file examples, documentation for react ${LIB_NAME}`,
        "input type file examples, fast and powerful library inputs state management for react."
        , ROOT + FILE);
};

const {EXAMPLES: {ROOT, SELECT, EDIT,FILE}} = routes

export const FileExamples = () => {

    return <div className="data">
        <h1 className="title">Input type file examples</h1>
        <p className="titleIntro">
            Below some examples for input of type file <span className="hl">{'<input type="file"'}</span>
        </p>
        <Line/>
        <h2 className="subTitle">
            File input example
        </h2>
        <p className="description">If you want change the default behaviour when allowing multiple upload, pushing new
            uploaded file
            instead or replacing it, set <span className="oKey hl">merge</span> to <span
                className="hl">true</span>.</p>
        <Iframe height={400} title="File input example" src={FILE_LINK}/>
        <h2 className="subTitle">
            File input with deletion and update example
        </h2>
        <p className="description">Use <CallDefinition name="selfUpdate" hl params=" Your Update "/> and <CallDefinition
            name="selfRemove"
            hl/> to update
            or delete an uploaded file.</p>
        <Iframe height={400} title="File input with deletion and update example" src={FILE_CONTROL_LINK}/>
        <p className="description">
            Hit next for 'edit' examples with {LIB_NAME}
        </p>
        <div className="foot">
            <PageButton to={ROOT + SELECT} prev/>
            <PageButton to={ROOT + EDIT}/>
        </div>
    </div>
}

export default FileExamples
