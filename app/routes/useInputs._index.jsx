import {getMeta, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return getMeta(
        "Use Inputs hook with a string, documentation for react aio-inputs",
        "string, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react."
    ,ROOT);
};

const {ROOT, STRING} = routes.USE_INPUTS

export const UseInputs = () => {
    useRedirect(ROOT, STRING);
    return ""
}

export default UseInputs
