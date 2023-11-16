import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect} from "react";
import {routes} from "../util/constants";
import Config from "../views/config";

export const meta = () => {

    return [
        {title: "Aio-Inputs Config"},
        {name: "description", content: "Use inputs config with react"}
    ];
};

const {ROOT, ASYNC_DELAY} = routes.CONFIG

export const Form = () => {
    const navigate = useNavigate();
    const {pathname, hash} = useLocation();
    useEffect(() => {
        if (pathname === ROOT && !hash) {
            navigate(ASYNC_DELAY);
        }
    }, [navigate, pathname, hash]);


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

    return <Config/>
}

export default Form
