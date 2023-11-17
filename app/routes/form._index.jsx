import {CARD, CREATOR, KEYWORDS, routes, SITE_IMAGE, SITE_NAME, SITE_URL} from "../util/constants";
import FormEntry from "../views/form";
import useRedirect from "../hook/useRedirect";

export const meta = () => {
    const TITLE = "Form Inputs state management documentation for react aio-inputs";
    const DESCRIPTION = "use form and get values , submit or reset your data. Best, simple, fast and powerful library inputs state management for react.";

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
};

const {ROOT, GET_VALUES} = routes.FORM

export const Form = () => {
    useRedirect(ROOT, GET_VALUES);
    return <FormEntry/>
}

export default Form
