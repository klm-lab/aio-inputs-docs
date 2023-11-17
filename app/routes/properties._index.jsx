import {CARD, CREATOR, KEYWORDS, routes, SITE_IMAGE, SITE_NAME, SITE_URL} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const commonPropMeta = () => {
    const TITLE = "Inputs properties documentation for react aio-inputs";
    const DESCRIPTION = "id, type, value, valid, error message, onChange, max, minLength. Best, simple, fast and powerful library inputs state management for react.";

    return [
        {name: "og:type", content: "website"},
        {name: "og:site_name", content: SITE_NAME},
        {
            name: "keywords",
            content: KEYWORDS
        },
        {title: TITLE},
        {name: "og:title", content: TITLE},
        {name: "twitter:title", content: TITLE},
        {name: "description", content: DESCRIPTION},
        {
            name: "twitter:description",
            content: DESCRIPTION
        },
        {name: "og:description", content: DESCRIPTION},
        {name: "og:url", content: SITE_URL + ROOT},
        {name: "twitter:url", content: SITE_URL + ROOT},
        {name: "og:image", content: SITE_IMAGE},
        {name: "twitter:image", content: SITE_IMAGE},
        {name: "twitter:creator", content: CREATOR},
        {name: "twitter:card", content: CARD},
    ];
}

export const meta = () => {

    return commonPropMeta()
};

const {ROOT, INPUTS} = routes.PROPERTIES


export const Properties = () => {
    useRedirect(ROOT, INPUTS);
    return ""
}

export default Properties
