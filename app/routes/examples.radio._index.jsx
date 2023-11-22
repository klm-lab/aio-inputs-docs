import {getMeta, routes} from "../util/constants";

export const meta = () => {

    return getMeta(
        "Use Inputs type radio examples, documentation for react aio-inputs",
        "input type radio examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO}, PROPERTIES} = routes

export const TextExamples = () => {

    return "radio"
}

export default TextExamples
