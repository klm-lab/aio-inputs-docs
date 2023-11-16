import {useLocation, useNavigate} from "@remix-run/react";
import {routes} from "../util/constants";
import {useEffect} from "react";

export const meta = () => {

    return [
        {title: "Aio-Inputs UseInputs"},
        {name: "description", content: "Use inputs with react"}
    ];
};
export const UseInputs = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    useEffect(() => {
        if (pathname === routes.USE_INPUTS.ROOT) {
            navigate(routes.USE_INPUTS.STRING);
        }
    }, [navigate, pathname]);
    return ""
}

export default UseInputs
