import {
    getMeta, LIB_NAME,
    routes,
    SELECT_LINK,
    SELECT_LINK_VALID,
    SELECT_MULTIPLE_CUSTOM,
    SELECT_MULTIPLE_LINK,
    SELECT_MULTIPLE_LINK_VALID
} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        `Use Inputs type select examples, documentation for react ${LIB_NAME}`,
        "input type select examples, fast and powerful library inputs state management for react."
        , ROOT + SELECT);
};

const {EXAMPLES: {ROOT, CHECKBOX, FILE, SELECT}} = routes

export const SelectExamples = () => {

    return <div className="data">
        <h1 className="title">Select input examples</h1>
        <p className="titleIntro">
            Below some examples
            for <span className="hl">{'<select ...> your options </select>'}</span> input html element
            or custom select. If you are using multiple selection, you have to set the input type to <span
            className="hl">'select'</span>
        </p>
        <Line/>
        <h2 className="subTitle">
            Html select element without validation
        </h2>
        <Iframe height={400} title="Html select element without validation" src={SELECT_LINK}/>
        <h2 className="subTitle">
            Html select element with validation
        </h2>
        <Iframe height={400} title="Html select element with validation" src={SELECT_LINK_VALID}/>
        <h2 className="subTitle">
            Html select element with multiple without validation
        </h2>
        <Iframe height={400} title="Html select element with multiple without validation" src={SELECT_MULTIPLE_LINK}/>
        <h2 className="subTitle">
            Html select element with multiple and validation
        </h2>
        <Iframe height={400} title="Html select element with multiple and validation" src={SELECT_MULTIPLE_LINK_VALID}/>
        <h2 className="subTitle">
            Custom select
        </h2>
        <Iframe height={400} title="Custom select" src={SELECT_MULTIPLE_CUSTOM}/>
        <p className="description">
            Hit next for file examples with {LIB_NAME}
        </p>
        <div className="foot">
            <PageButton to={ROOT + CHECKBOX} prev/>
            <PageButton to={ROOT + FILE}/>
        </div>
    </div>
}

export default SelectExamples
