import {CHECKBOX_LINK, CHECKBOX_LINK_VALID, getMeta, LIB_NAME, routes} from "../util/constants";
import CheckboxAndRadio from "../views/checkboxAndRadio";

export const meta = () => {

    return getMeta(
        `Use Inputs type checkbox examples, documentation for react ${LIB_NAME}`,
        "input type checkbox examples, fast and powerful library inputs state management for react."
        , ROOT + CHECKBOX);
};

const {EXAMPLES: {ROOT, RADIO, SELECT, CHECKBOX}} = routes

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
