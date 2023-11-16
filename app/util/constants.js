export const routes = {
    ROOT: "/",
    USE_INPUTS: {
        ROOT: "/use_inputs",
        STRING: "/use_inputs/string",
        ARRAY: "/use_inputs/array",
        OBJECT: "/use_inputs/object",
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
        ROOT: "/track",
        SETUP: "#setup",
        USE_VALUES: "#useValues",
        LENGTH: "#length",
    },
    PROPERTIES: {
        ROOT: "/properties",
        INPUTS: "#inputs",
        VALIDATIONS: "#validations"
    },
}

export const SIDEBAR = {
    HOOK: "hook",
    FORM: "form",
    TRACK: "track",
    PROPERTIES: "properties"
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


export const IS_DARK = "isDark"
export const COLOR = "color";

export const DARK_SCHEME = '(prefers-color-scheme: dark)'