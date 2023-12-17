export const RESERVED = [
    "props",
    "label",
    "merge",
    "valid",
    "touched",
    "validation",
    "data",
    "afterChange",
    "g",
    "set"
]
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
        GET: "#get",
        SHOW_ERROR: "#showError",
        RESET: "#reset",
        EACH: "#each",
    },
    CONFIG: {
        ROOT: "/config",
        ASYNC_DELAY: "#asyncDelay",
        PERSIST_ID: "#pid",
    },
    TRACK: {
        ROOT: "/tracking",
        TRACKING_TOOL: "#trackingTool",
        USE_VALUES: "#useValues",
        IS_VALID: "#isValid",
    },
    PROPERTIES: {
        ROOT: "/properties",
        INPUTS: "/inputs",
        INPUTS_PROPS: "/inputProps",
        INPUTS_FILES: "/inputFiles",
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
    },
    TYPES: "/types"
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
    ts: "https://stackblitz.com/edit/stackblitz-starters-kmslym?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-jrc1wc?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const ARRAY_VALID_ERROR_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-mqylls?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-csnuxy?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const PASSWORD_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-aj7g6c?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-wgmyr8?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const RADIO_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-kdxktp?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-3xihqf?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const RADIO_LINK_VALID = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-p9z69f?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-xhnvtp?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const CHECKBOX_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-xe7txh?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-3mm1fv?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const CHECKBOX_LINK_VALID = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-jedpx2?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-a9qwh7?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const SELECT_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-grsysd?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-grydl1?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const SELECT_LINK_VALID = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-pycc8f?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-vp7uca?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const SELECT_MULTIPLE_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-ze4vr4?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-kay5u7?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const SELECT_MULTIPLE_LINK_VALID = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-bletfw?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-gerdum?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}

export const SELECT_MULTIPLE_CUSTOM = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-jhbmpg?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-roholf?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const FILE_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-dwua1n?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-rbfcu7?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const FILE_CONTROL_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-ubohsb?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-qhjcc2?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}
export const EDIT_LINK = {
    ts: "https://stackblitz.com/edit/stackblitz-starters-du4fot?ctl=1&embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1",
    js: "https://stackblitz.com/edit/stackblitz-starters-zmfkxc?ctl=1&embed=1&file=src%2FApp.js&hideExplorer=1&hideNavigation=1"
}