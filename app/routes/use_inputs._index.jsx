import {useLocation, useNavigate} from "@remix-run/react";
import {routes} from "../util/constants";
import {useEffect} from "react";

export const meta = () => {

    return [
        {title: "Aio-Inputs UseInputs"},
        {name: "description", content: "Use inputs with react"}
    ];
};

const {ROOT,STRING} = routes.USE_INPUTS

export const UseInputs = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    useEffect(() => {
        if (pathname === ROOT) {
            navigate(STRING);
        }
    }, [navigate, pathname]);

    useEffect(() => {
        window.onpopstate = (ev) => {
            if (ev.target.navigation.currentEntry.url.includes(ROOT)) {
                navigate(-1)
            }
        }
        return () => {
            window.onpopstate = null
        }
    }, [navigate]);
    return ""
}

export default UseInputs
