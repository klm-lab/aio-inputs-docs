import "../sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {routes, SIDEBAR} from "../../../util/constants";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";

const {FORM: FORM_ROUTE} = routes;
const R = Object.keys(FORM_ROUTE);
const {FORM} = SIDEBAR;
const FormSidebar = () => {

    const {pathname, hash} = useLocation();

    const activeList = appStore("activeList");

    // For ssr, hash not reach server
    const [r, setR] = useState("")

    useEffect(() => {
        if (pathname.includes(FORM_ROUTE.ROOT)) {
            appStore.set(ref => {
                ref.activeList = FORM
            });
            setR(hash)
        } else {
            setR("")
        }
    }, [pathname, hash]);

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === FORM ? "" : FORM
        })
    }, [])

    return <div className="sideEl">
        <h2 onClick={toggleMenu} className="sideTitle">Form</h2>
        <ul style={{
            "--height": `calc(var(--el-h) * ${R.length - 1})`
        }} className={addClasses("list", activeList === FORM && "activeList")}>
            {R.map(l => {
                const route = FORM_ROUTE.ROOT + FORM_ROUTE[l];
                return FORM_ROUTE[l] !== FORM_ROUTE.ROOT && <Link key={route} to={route} >
                    <li className={addClasses("item", FORM_ROUTE[l] === r ? "active" : "")}>
                        {FORM_ROUTE[l].replace("#", "")}
                    </li>
                </Link>
            })}
        </ul>
    </div>
}

export default FormSidebar