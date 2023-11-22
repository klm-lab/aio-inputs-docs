import {getMeta, routes} from "../util/constants";

export const meta = () => {

    return getMeta(
        "Use Inputs type checkbox examples, documentation for react aio-inputs",
        "input type checkbox examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO}, PROPERTIES} = routes

export const TextExamples = () => {

    return "checkbox"
}

export default TextExamples
