import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect} from "react";

const useRedirect= (ROOT, LINK) => {
    const navigate = useNavigate();
    const {pathname, hash} = useLocation();

    useEffect(() => {
        if (pathname === ROOT && !hash) {
            navigate(ROOT + LINK);
        }
    }, [navigate, pathname, hash, LINK, ROOT]);

    useEffect(() => {
        window.onpopstate = (ev) => {
            if (ev.target.navigation.currentEntry.url.includes(ROOT)) {
                navigate(-1)
            }
        }
        return () => {
            window.onpopstate = null
        }
    }, [navigate, ROOT]);
}

export default useRedirect