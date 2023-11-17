import {routes} from "../util/constants";
import FormEntry from "../views/form";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs form with react"}
    ];
};

const {ROOT, GET_VALUES} = routes.FORM

export const Form = () => {
    useRedirect(ROOT, GET_VALUES);
    return <FormEntry/>
}

export default Form
