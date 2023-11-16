import "../sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {routes, SIDEBAR} from "../../../util/constants";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";

const {PROPERTIES: PROPERTIES_ROUTE} = routes;
const R = Object.keys(PROPERTIES_ROUTE);
const {PROPERTIES} = SIDEBAR;
const PropertiesSidebar = () => {

    const {pathname, hash} = useLocation();

    const activeList = appStore("activeList");

    // For ssr
    const [r, setR] = useState("")

    useEffect(() => {
        if (pathname.includes(PROPERTIES_ROUTE.ROOT)) {
            appStore.set(ref => {
                ref.activeList = PROPERTIES
            });
            setR(hash)
        } else {
            setR("")
        }
    }, [pathname, hash]);

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === PROPERTIES ? "" : PROPERTIES
        })
    }, [])

    return <div className="sideEl">
        <h2 onClick={toggleMenu} className="sideTitle">Properties</h2>
        <ul style={{
            "--height": `calc(var(--el-h) * ${R.length - 1})`
        }} className={addClasses("list", activeList === PROPERTIES && "activeList")}>
            {R.map(l => {
                const route = PROPERTIES_ROUTE.ROOT + PROPERTIES_ROUTE[l];
                return PROPERTIES_ROUTE[l] !== PROPERTIES_ROUTE.ROOT &&
                    <Link key={route} to={route}>
                        <li className={addClasses("item up", PROPERTIES_ROUTE[l] === r ? "active" : "")}>
                            {PROPERTIES_ROUTE[l].replace("#", "")}
                        </li>
                    </Link>
            })}
        </ul>
    </div>
}

export default PropertiesSidebar