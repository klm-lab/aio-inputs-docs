import String from "../views/useInputs/string";
import {getMeta, routes} from "../util/constants";

const {ROOT, STRING} = routes.USE_INPUTS

export const meta = () => {

    return getMeta(
        "Use Inputs hook with a string, documentation for react aio-inputs",
        "string, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT + STRING
    );
};
export const UseInputs = () => {
    return <String/>
}

export default UseInputs
