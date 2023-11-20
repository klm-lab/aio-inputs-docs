const ARRAY_MIX = (gen, spec) => `const [myInputs] = useInputs([
    {
        name: "age",
        type: "number",${gen ?? ""}
        validation: {
            min: ${spec ?? "18 // min validation"}
        },
    },
    "name", // No validation
    "firstname", // No validation
])`;

const OBJECT_MIX = (gen, spec) => `const [myInputs, form] = useInputs(
    {
        name: {${gen ?? ""}
            validation: {
                minLength: ${spec ?? "3 // minLength validation"}
            },
        },
    },
    {
        gender: {}
    },
)`


const MAP_LINE = (value) => `return ${value}.map(ip => <inputkey={ip.key} value={ip.value} onChange={ip.onChange} />)`

const IN_LINE = (value) => `return ${value}.map(ip => {
    return <div key={ip.key}>
        <input value={ip.value} onChange={ip.onChange} />
        {/* if touched and not valid */}
        {ip.touched && !ip.valid && <span>{ip.errorMessage}</span>}
    </div>
})`

export const GET_STARTED_CODE = {
    NPM: `npm i aio-inputs`,
    YARN: `yarn add aio-inputs`,
    IMPORT: `import { useInputs } from "aio-inputs"`
}

export const USE_INPUTS_CODE = {
    CREATE_STRING: `const [myInput] = useInputs("phoneNumber")`,
    PROPERTIES: `{
    key: "some unique key",
    tid: "phoneNumber",
    name: "phoneNumber",
    label: "phoneNumber",
    type: "text",
    value: "",
    valid: true,
    onChange: Function
}`,
    BIND: `<input value={myInput.value} onChange={myInput.onChange} />`,
    CREATE_ARRAY_STRING: `const [myInputs] = useInputs(["name", "phoneNumber", "gender"])`,
    ARRAY_PROPERTIES: `[{
    key: "some unique key",
    id:" name | phoneNumber | gender",
    name: "name | phoneNumber | gender",
    label: "name | phoneNumber | gender",
    type: "text",
    value: "",
    valid: true,
    onChange: Function
}]`,
    ARRAY_BIND: MAP_LINE("myInputs"),
    CREATE_ARRAY_MIX: ARRAY_MIX(),
    CREATE_ARRAY_MIX_GEN_MESSAGE: ARRAY_MIX(`
        // General error message
        errorMessage: "We need you to have at least 18",`),
    CREATE_ARRAY_MIX_SPEC_MESSAGE: ARRAY_MIX(null, `{
                // Specific error message
                message: "We need you to have at least 18",
                value:18
            }`),
    INPUT_ARRAY_LINE: IN_LINE("myInputs"),
    CREATE_OBJECT: `const [myInputs, form] = useInputs(
    {
        name: {},
        gender: {}
    },
)`,
    OBJECT_PROPERTIES: `{
    name: {
        key: "some unique key",
        id: "name",
        name: "name",
        label: "name",
        type: "text",
        value: "",
        valid: true,
        onChange: Function
    },
    gender: {
        key: "some unique key",
        id: "gender",
        name: "gender",
        label: "gender",
        type: "text",
        value: "",
        valid: true,
        onChange: Function
    },
},`,
    BIND_FORM: MAP_LINE("form"),
    DESTRUCTURING: `const {name , gender} = myInputs;

return <>
    <input value={name.value} onChange={name.onChange} />
    <input value={gender.value} onChange={gender.onChange} />
</>`,
    CREATE_OBJ: OBJECT_MIX(),
    OBJ_GEN_MESSAGE: OBJECT_MIX(`
            // General error message
            errorMessage: "The name must have at least 3 characters",`),
    OBJ_SPEC_MESSAGE: OBJECT_MIX(null, `{
                    // Specific error message
                    message: "The name must have at least 3 characters",
                    value: 3
                }`),
    FORM_INLINE: IN_LINE("form")
}

const FORM_C = `const [myInputs, form] = useInputs(...)`

export const FORM_CODE = {
    GET_VALUES: `${FORM_C}

// Get your values
console.log(form.getValues())`,
    RESET: `${FORM_C}

// Do a reset
form.reset()`,
    FOR_EACH: `${FORM_C}

// For each input
form.forEach()`,
    MAP: `${FORM_C}

// Map inputs
form.map()`,
    LENGTH: `${FORM_C}

// Get your inputs length
console.log(form.length)`,
    TO_ARRAY: `${FORM_C}

// Get your array version
console.log(form.toArray())`,
    TO_OBJECT: `${FORM_C}

// Get your object version
 console.log(form.toObject())`,
}

const CONFIG_C = `const [myInputs, form] = useInputs(yourInputs ,{`;

export const CONFIG_CODE = {
    ASYNC_DELAY: `${CONFIG_C}
    asyncDelay: 800 // The type is number
})`,
    PERSIST_ID: `${CONFIG_C}
    persistID: "myUniqueId"
})`,
    TRACK_ID: `${CONFIG_C}
    trackID: trackingTool.MY_ID
})`
}

export const TRACK_CODE = {
    IMPORT: `import { trackInputs } from "aio-inputs"`,
    CREATE: `const trackingTool = trackInputs(["INPUT_ONE", "INPUT_TWO", "MY_ID"])`,
    TRACKING: `// Component 1
const[myInputs]=useInputs(yourInputs ,{
    trackID:trackingTool.INPUT_ONE
})

// Component 2
const[myInputs]=useInputs(yourInputs ,{
    trackID:trackingTool.INPUT_TWO
})

// Component 3
const[myInputs]=useInputs(yourInputs ,{
    trackID:trackingTool.MY_ID
})`,
    USE_TRACK: (value) => `// For INPUT_ONE
trackingTool.INPUT_ONE.${value}()

// For INPUT_TWO
trackingTool.INPUT_TWO.${value}()

// For MY_ID
trackingTool.MY_ID.${value}()`,
    USE_TRACK_G: (value) => `// For all inputs
trackingTool.${value}()`,
    LENGTH: `// Each input
trackingTool.INPUT_ONE.length

// All inputs
trackingTool.length()`
}

export const PROPERTIES_CODE = {
    INIT: `// Without file input
    
form.forEach(ip => ip.init(MY_VALUE))`,
    INIT_FILES: `// With file input
    
form.forEach(ip => ip.init(MY_URL_OR_MY_ARRAY_OF_URL, {
    getBlob: (url) => {
        // get your blob with the url
        return a blob or a file
    },
}))`,
    VALIDATIONS_CUSTOM: (async) => `{
    validation:{
        custom:${async ? " async" : ""} (value, setErrorMessage) => {
            // make your validation
            setErrorMessage()
            return false
        },
    },
},`,
    COPY: `const [myInputs] = useInputs([
    {
        id: "name_id",
        name: "name",
        validation: {
            required: true,
            minLength: 3,
            maxLength: 30,
            // Other validation
        },
    },
    {
        name: "firstname",
        validation: {
            copy: "name_id"
        },
    },
])`,
    OMIT: `{
    name: "firstname",
    validation: {
        copy: {
            value: "name_id",
            omit: ["maxLength"]
        },
    },
},`
}