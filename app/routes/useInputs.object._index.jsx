import ObjectEntry from "../views/useInputs/object";
import {getMeta, routes} from "../util/constants";

const {ROOT, OBJECT} = routes.USE_INPUTS

export const meta = () => {

    return getMeta(
        "Use Inputs hook with an object, documentation for react aio-inputs",
        "object, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react.",
        ROOT + OBJECT
    );
};
export const UseInputs = () => {
    return <ObjectEntry/>
}

export default UseInputs
