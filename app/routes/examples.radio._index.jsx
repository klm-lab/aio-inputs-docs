import {getMeta, RADIO_LINK, RADIO_LINK_VALID, routes} from "../util/constants";
import CheckboxAndRadio from "../views/checkboxAndRadio";

export const meta = () => {

    return getMeta(
        "Use Inputs type radio examples, documentation for react aio-inputs",
        "input type radio examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, PASSWORD, CHECKBOX}} = routes

export const RadioExamples = () => {
    return <CheckboxAndRadio
        name="radio"
        link={RADIO_LINK}
        validLink={RADIO_LINK_VALID}
        nextName="checkbox"
        prevLink={ROOT + PASSWORD}
        nextLink={ROOT + CHECKBOX}
    />

}

export default RadioExamples