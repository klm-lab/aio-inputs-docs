import ValidationsProperties from "../views/properties/validations";
import {commonPropMeta} from "./properties._index";

export const meta = () => {

    return commonPropMeta()
};

export const Properties = () => {
    return <ValidationsProperties/>
}

export default Properties
