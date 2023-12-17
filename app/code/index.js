const ARRAY_MIX = (spec) => `const [myInputs] = useInputs([
    {
        name: "age",
        type: "number",
        validation: {
            min: min(18${spec ?? ''}) // min validation"
        },
    },
    "name", // No validation
    "firstname", // No validation
])`;

const OBJECT_MIX = (spec) => `const [myInputs, form] = useInputs(
    {
        name: {
            validation: {
                min: min(3${spec ?? ''}) // minLength validation"
            },
        },
    },
    {
        gender: {}
    },
)`


const MAP_LINE = (value) => `return ${value}.map(ip => <input key={ip.key} {...ip.props} />)`

const IN_LINE = (value) => `return ${value}.map(ip => {
    return <div key={ip.key}>
        <input {...ip.props} />
        {/* if touched and not valid */}
        <span>{ip.errorMessage}</span>
    </div>
})`

export const GET_STARTED_CODE = {
    NPM: `npm i aio-inputs`,
    YARN: `yarn add aio-inputs`,
    IMPORT: `import { useInputs } from "aio-inputs"`
}

export const USE_INPUTS_CODE = {
    CREATE_STRING: `const [myInput] = useInputs("phoneNumber")`,
    VALIDITY: `// all inputs
yourInputs.isTouched
yourInputs.isValid

// Each input
eachInput.touched
eachInput.valid`,
    BIND: `<input {...myInput.phoneNumber.props} />`,
    CREATE_ARRAY_STRING: `const [myInputs] = useInputs(["name", "phoneNumber", "gender"])`,
    ARRAY_BIND: MAP_LINE("myInputs"),
    CREATE_ARRAY_MIX_SPEC_MESSAGE: ARRAY_MIX( `, "We need you to have at least 18"`),
    INPUT_ARRAY_LINE: IN_LINE("myInputs"),
    CREATE_OBJECT: `const [myInputs, form] = useInputs(
    {
        name: {},
        gender: {}
    },
)`,
    BIND_FORM: MAP_LINE("form"),
    DESTRUCTURING: `const {name , gender} = myInputs;

return <>
    <input {...name.props} />
    <input {...gender.props} />
</>`,
    OBJ_SPEC_MESSAGE: OBJECT_MIX( `{
                    // Specific error message
                    message: "The name must have at least 3 characters",
                    value: 3
                }`),
    FORM_INLINE: IN_LINE("form")
}

const FORM_C = `const [myInputs, form] = useInputs(...)`

export const FORM_CODE = {
    ON_SUBMIT: `${FORM_C}

<form onSubmit={form.onSubmit}
...
</form>`,
    GET_VALUES: `${FORM_C}

// Get your values
console.log(form.getValues())`,
    GET: `${FORM_C}

// Get your input
console.log(form.get("input name"))`,
    SHOW_ERROR: `${FORM_C}

// Show error
console.log(form.showError())`,
    RESET: `${FORM_C}

// Do a reset
form.reset()`,
    FOR_EACH: `${FORM_C}

// For each input
form.each()`,
}

const CONFIG_C = `const [myInputs, form] = useInputs(yourInputs ,{`;

export const CONFIG_CODE = {
    ASYNC_DELAY: `${CONFIG_C}
    asyncDelay: 800 // The type is number
})`,
    PERSIST_ID: `${CONFIG_C}
    pid: "myUniqueId"
})`
}

export const TRACK_CODE = {
    IMPORT: `import { trackInputs } from "aio-inputs"`,
    CREATE: `const myCustomInputs = trackInputs(["name", "gender"])`,
    TRACKING: `const [myInputs, form] = myCustomInputs()`,
    USE_TRACK: (value) => `myCustomInputs.${value}()`
}

export const PROPERTIES_CODE = {
    SET: `// Set some data
input.set("data", My_Data)

// Show some password
input.set("type", "text")

// Hide some password
input.set("type", "password")

// Set some value
input.set("value", MY_VALUE)

// Set blob or file while setting file input value
input.set("value", MY_URL_OR_MY_ARRAY_OF_URL, async (url) => your file)
`,
    VALIDATIONS_CUSTOM: (async) => `{
    validation:{
        ${async ? 'asyncCustom' : "custom"}:(value${async ? ' ,onSuccess, onError': ''}) => {
            // make your validation${async ? `
             callServer(value) {
             .then(valid => onSuccess(valid ? null : "new error message"))
             .catch(error => {
                onError();
                console.log(error)
             })
            `: `
             return valueIsValid ? null : "new error message"
            `}
        }),
    },
},`,
//     COPY: `
// validation: {
//    copy: copy("input name")
// `,
//     COPY_OMIT: `
// validation: {
//    copy: copy("input name", ["min"])
// `
}

export const TYPES_CODE = {
    CREATE_ARRAY: `// To type an Array of inputs
    
import { CreateArrayInputs } from "aio-inputs"

const myInputs: CreateArrayInputs = [...]`,
    CREATE_OBJECT: `// To type an Object of inputs
    
import { CreateObjectInputs } from "aio-inputs"

const myInputs: CreateObjectInputs<'name' | 'age'> = {
    name:{...}
    age:{...}
},`,
    OUTPUT_INPUT: `// To type an Input
    
import {Input} from "aio-inputs"`,
    OUTPUT_INPUT_PROPS: `// To type an InputProps
    
import {InputProps} from "aio-inputs"`,
    OUTPUT_ARRAY: `// To type an Array of inputs
    
import {ArrayInputs} from "aio-inputs"`,
    OUTPUT_OBJECT: `// To type an Object of inputs
    
import { ObjectInputs } from"aio-inputs"

ObjectInputs<'name' | 'age'>`
}