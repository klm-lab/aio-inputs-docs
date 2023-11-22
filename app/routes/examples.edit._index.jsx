import {getMeta, routes} from "../util/constants";

export const meta = () => {

    return getMeta(
        "Use Inputs edit examples, documentation for react aio-inputs",
        "input edit examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO}, PROPERTIES} = routes

export const TextExamples = () => {

    return "edit"
}

export default TextExamples
