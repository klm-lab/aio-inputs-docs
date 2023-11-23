import {
    ARRAY_STRING_LINK,
    ARRAY_VALID_ERROR_LINK,
    ARRAY_VALID_LINK,
    getMeta,
    routes,
    SINGLE_INPUT_LINK
} from "../util/constants";
import Line from "../components/line";
import PageButton from "../components/pageButton";
import Iframe from "../components/iframe/Iframe";

export const meta = () => {

    return getMeta(
        "Use Inputs type text examples, documentation for react aio-inputs",
        "input type text examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, PASSWORD}, PROPERTIES} = routes

export const TextExamples = () => {

    return <div className="data">
        <h1 className="title">Input type text examples</h1>
        <p className="titleIntro">
            Below some examples for input of type text <span className="hl">{'<input type="text"'}</span>
        </p>
        <Line/>
        <h2 className="subTitle">
            A single input with no validation
        </h2>
        <Iframe title="A single input with no validation" src={SINGLE_INPUT_LINK}/>
        <h2 className="subTitle">
            An array of string with no validation
        </h2>
        <Iframe title=" An array of string with no validation" src={ARRAY_STRING_LINK}/>
        <h2 className="subTitle">
            An array of inputs with some validation
        </h2>
        <Iframe height={400} title=" An array of inputs with some validation" src={ARRAY_VALID_LINK}/>
        <h2 className="subTitle">
            Array with Validation and errorMessage
        </h2>
        <Iframe height={400} title="Array with Validation and errorMessage" src={ARRAY_VALID_ERROR_LINK}/>
        <p className="description">
            Hit next for password examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={PROPERTIES.ROOT + PROPERTIES.VALIDATIONS} prev/>
            <PageButton to={ROOT + PASSWORD}/>
        </div>
    </div>
}

export default TextExamples
