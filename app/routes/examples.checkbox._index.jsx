import {CHECKBOX_LINK, CHECKBOX_LINK_VALID, getMeta, routes} from "../util/constants";
import CheckboxAndRadio from "../views/checkboxAndRadio";

export const meta = () => {

    return getMeta(
        "Use Inputs type checkbox examples, documentation for react aio-inputs",
        "input type checkbox examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO, SELECT}} = routes

export const CheckboxExamples = () => {

    return <CheckboxAndRadio
        name="checkbox"
        link={CHECKBOX_LINK}
        validLink={CHECKBOX_LINK_VALID}
        nextName="select"
        prevLink={ROOT + RADIO}
        nextLink={ROOT + SELECT}
    />
}

export default CheckboxExamples
