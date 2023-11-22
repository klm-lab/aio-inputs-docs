export const routes = {
    ROOT: "/",
    USE_INPUTS: {
        ROOT: "/useInputs",
        STRING: "/string",
        ARRAY: "/array",
        OBJECT: "/object",
    },
    FORM: {
        ROOT: "/form",
        ON_SUBMIT: "#onSubmit",
        GET_VALUES: "#getValues",
        RESET: "#reset",
        FOR_EACH: "#forEach",
        MAP: "#map",
        LENGTH: "#length",
        TO_ARRAY: "#toArray",
        TO_OBJECT: "#toObject",
    },
    CONFIG: {
        ROOT: "/config",
        LOCK_VALUES_ON_ERROR: "#lockValuesOnError",
        ASYNC_DELAY: "#asyncDelay",
        PERSIST_ID: "#persitID",
        TRACK_ID: "#trackID"
    },
    TRACK: {
        ROOT: "/tracking",
        TRACKING_TOOL: "#trackingTool",
        USE_VALUES: "#useValues",
        LENGTH: "#length",
    },
    PROPERTIES: {
        ROOT: "/properties",
        INPUTS: "/inputs",
        VALIDATIONS: "/validations"
    },
    EXAMPLES: {
        ROOT: "/examples",
        TEXT: "/text",
        PASSWORD: "/password",
        RADIO: "/radio",
        CHECKBOX: "/checkbox",
        SELECT: "/select",
        FILE: "/file",
        EDIT: "/edit"
    }
}

export const GITHUB_LINK = "https://github.com/klm-lab/inputs";
export const SITE_URL = "https://aio-inputs.netlify.app"
// export const CARD = "summary_large_image";

export const getMeta = (title, description, url) => [
    {
        name: "keywords",
        content: "react, inputs, state, store, immutable, fast, best, manage, management, hook, redux, inputs, aio-inputs, npm, track, validations, validate, input, useInputs, config, persist, reset, submit"
    },
    {title: title},
    {name: "description", content: description},
    {name: "og:type", content: "website"},
    {name: "og:title", content: title},
    {name: "og:description", content: description},
    {name: "og:url", content: url ? SITE_URL + url : SITE_URL},
    {name: "og:image", content: SITE_URL + "/site_image.png"},
    {name: "og:site_name", content: "Aio-inputs"},
    {name: "twitter:title", content: title},
    {name: "twitter:description", content: description},
    {name: "twitter:url", content: url ? SITE_URL + url : SITE_URL},
    {name: "twitter:image", content: SITE_URL + "/site_image.png"},
    {name: "twitter:creator", content: "@klm-lab"},
    // {name: "twitter:card", content: CARD},
]

export const getInputsKey = (value) => [
    {key: "key", value: '"some unique key",'},
    {key: "id", value: value},
    {key: "name", value: value},
    {key: "label", value: value},
    {key: "type", value: '"text",'},
    {key: "value", value: '"",'},
    {key: "valid", value: "true,", className: "definition"},
    {key: "onChange", value: "Function", className: "definition"},
]


export const IS_DARK = "isDark";
export const DARK_SCHEME = '(prefers-color-scheme: dark)';

export const SINGLE_INPUT_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-gbcivq?ctl=1&embed=1&file=src%2Fstring.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-ufgt47?ctl=1&embed=1&file=src%2Fstring.js&hideExplorer=1&hideNavigation=1"
}
export const ARRAY_STRING_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-skbsdt?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-fymkce?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const ARRAY_VALID_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-skbsdt?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-jrc1wc?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const ARRAY_VALID_ERROR_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-skbsdt?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-csnuxy?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const PASSWORD_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-skbsdt?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-wgmyr8?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}