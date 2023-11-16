import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect} from "react";
import {routes} from "../util/constants";
import FormEntry from "../views/form";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs form with react"}
    ];
};

const {ROOT,GET_VALUES} = routes.FORM

export const Form = () => {
    const navigate = useNavigate();
    const {pathname, hash} = useLocation();
    useEffect(() => {
        if (pathname === ROOT && !hash) {
            navigate(GET_VALUES);
        }
    }, [navigate, pathname, hash]);
    return <FormEntry/>
}

export default Form
