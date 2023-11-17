import Array from "../views/useInputs/array";
import {CARD, CREATOR, KEYWORDS, routes, SITE_IMAGE, SITE_NAME, SITE_URL} from "../util/constants";

const {ROOT,ARRAY} = routes.USE_INPUTS

export const meta = () => {

    const TITLE = "Use Inputs hook with an array, documentation for react aio-inputs";
    const DESCRIPTION = "array,string, object, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react.";

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
        {name: "og:url", content: SITE_URL + ROOT + ARRAY},
        {name: "twitter:url", content: SITE_URL + ROOT + ARRAY},
        {name: "og:image", content: SITE_IMAGE},
        {name: "twitter:image", content: SITE_IMAGE},
        {name: "twitter:creator", content: CREATOR},
        {name: "twitter:card", content: CARD},
    ];
};
export const UseInputs = () => {
    return <Array/>
}

export default UseInputs
