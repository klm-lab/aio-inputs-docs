import {getMeta, routes} from "../util/constants";

export const meta = () => {

    return getMeta(
        "Use Inputs type file examples, documentation for react aio-inputs",
        "input type file examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO}, PROPERTIES} = routes

export const TextExamples = () => {

    return "file"
}

export default TextExamples
