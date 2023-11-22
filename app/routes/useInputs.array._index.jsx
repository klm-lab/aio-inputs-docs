import Array from "../views/useInputs/array";
import {getMeta, routes} from "../util/constants";

const {ROOT, ARRAY} = routes.USE_INPUTS

export const meta = () => {

    return getMeta(
        "Use Inputs hook with an array, documentation for react aio-inputs",
        "array,string, object, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT + ARRAY
    );
};
export const UseInputs = () => {
    return <Array/>
}

export default UseInputs
