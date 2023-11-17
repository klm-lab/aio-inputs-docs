import Home from "../views/getStarted";
import {CARD, CREATOR, KEYWORDS, SITE_IMAGE, SITE_NAME, SITE_URL} from "../util/constants";

export const meta = () => {

    const TITLE = "Inputs state management documentation for react aio-inputs";
    const DESCRIPTION = "Best, simple, fast and powerful library inputs state management for react";

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
        {name: "og:url", content: SITE_URL},
        {name: "twitter:url", content: SITE_URL},
        {name: "og:image", content: SITE_IMAGE},
        {name: "twitter:image", content: SITE_IMAGE},
        {name: "twitter:creator", content: CREATOR},
        {name: "twitter:card", content: CARD},
    ];
};

export default function Root() {
    return <Home/>;
}
