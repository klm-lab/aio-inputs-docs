import {getMeta, LIB_NAME, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return getMeta(
        `Use Inputs examples, documentation for react ${LIB_NAME}`,
        "input examples, fast and powerful library inputs state management for react."
        ,ROOT);
};

const {ROOT, TEXT} = routes.EXAMPLES

export const Examples = () => {
    useRedirect(ROOT, TEXT);
    return ""
}

export default Examples
