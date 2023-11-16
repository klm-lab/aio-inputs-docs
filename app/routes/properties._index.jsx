import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect} from "react";
import {routes} from "../util/constants";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs properties with react"}
    ];
};

const {ROOT,INPUTS} = routes.PROPERTIES


export const Form = () => {
    const navigate = useNavigate();
    const {pathname, hash} = useLocation();
    useEffect(() => {
        if (pathname === ROOT && !hash) {
            navigate(INPUTS);
        }
    }, [navigate, pathname, hash]);
    return "po"
}

export default Form
