import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect} from "react";
import {routes} from "../util/constants";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs track with react"}
    ];
};

const {ROOT,SETUP} = routes.TRACK

export const Form = () => {
    const navigate = useNavigate();
    const {pathname,hash} = useLocation();
    useEffect(() => {
        if (pathname === ROOT && !hash) {
            navigate(SETUP);
        }
    }, [navigate, pathname, hash]);
    return "track"
}

export default Form
