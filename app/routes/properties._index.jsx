import {routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs properties with react"}
    ];
};

const {ROOT, INPUTS} = routes.PROPERTIES


export const Properties = () => {
    useRedirect(ROOT, INPUTS);
    return ""
}

export default Properties
