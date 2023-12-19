import {getMeta, LIB_NAME, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const commonPropMeta = (url) => {

    return getMeta(
        `Inputs properties documentation for react ${LIB_NAME}`,
        "id, type, value, valid, error message, onChange, max, minLength. Best, simple, fast and powerful library inputs state management for react.",
        url
    );
}

export const meta = () => {

    return commonPropMeta(ROOT)
};

const {ROOT, INPUTS} = routes.PROPERTIES


export const Properties = () => {
    useRedirect(ROOT, INPUTS);
    return ""
}

export default Properties
