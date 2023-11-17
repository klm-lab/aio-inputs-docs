import {routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return [
        {title: "Aio-Inputs UseInputs"},
        {name: "description", content: "Use inputs with react"}
    ];
};

const {ROOT, STRING} = routes.USE_INPUTS

export const UseInputs = () => {
    useRedirect(ROOT, STRING);
    return ""
}

export default UseInputs
