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
}

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
export const DARK_SCHEME = '(prefers-color-scheme: dark)'