import {CARD, CREATOR, KEYWORDS, routes, SITE_IMAGE, SITE_NAME, SITE_URL} from "../util/constants";
import ConfigEntry from "../views/config";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    const TITLE = "Inputs configuration state management configuration documentation for react aio-inputs";
    const DESCRIPTION = "Configuration for persist data, asynchronous validation and tracking. Best, simple, fast and powerful library inputs state management for react.";

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

const {ROOT, ASYNC_DELAY} = routes.CONFIG

export const Config = () => {
    useRedirect(ROOT, ASYNC_DELAY);
    return <ConfigEntry/>
}

export default Config
