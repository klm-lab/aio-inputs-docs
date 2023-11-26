import LogoIcon from "../../assets/icon/LogoIcon";
import {appStore} from "../../store";
import {useCallback, useEffect} from "react";
import {routes} from "../../util/constants";
import {useNavigate} from "@remix-run/react";

const {ROOT} = routes;

const Logo = () => {

    const sidebar = appStore("sidebar");

    const navigate= useNavigate();

    const toggleSideBar = useCallback((e) => {
        e.preventDefault()
        if (window.innerWidth <= 968) {
            appStore.set(ref => {
                ref.overlay = !ref.overlay;
                ref.sidebar = !ref.sidebar
            })
        } else {
            navigate(ROOT)
        }
    }, [navigate])

    const onResize = useCallback(() => {
        if (window.innerWidth > 968 && sidebar) {
            appStore.set(ref => {
                ref.sidebar = false;
                ref.overlay = false
            })
        }
    }, [sidebar])

    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [onResize]);

    // Using a because we want a link without default navigation behaviour but must be craw
    return <a href={ROOT} aria-label="Get started page" onClick={toggleSideBar} className="logo">
        <LogoIcon size={40}/>
    </a>
}

export default Logo