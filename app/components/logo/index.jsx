import LogoIcon from "../../assets/icon/LogoIcon";
import "./logo.css"
import {appStore} from "../../store";
import {useCallback, useEffect} from "react";

const Logo = () => {

    const sidebar = appStore("sidebar")

    const toggleSideBar = useCallback(() => {
        if (window.innerWidth <= 968) {
            appStore.set(ref => {
                ref.overlay = !ref.overlay;
                ref.sidebar = !ref.sidebar
            })
        }
    }, [])

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

    return <div onClick={toggleSideBar} className="logo">
        <LogoIcon size={40}/>
    </div>
}

export default Logo