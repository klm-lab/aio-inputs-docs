import "../sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";
import ArrowIcon from "../../../assets/icon/ArrowIcon";

const SidebarCategory = ({routesKeys, routes}) => {

    const {ROOT} = routes;

    const {pathname, hash} = useLocation();

    const activeList = appStore("activeList");

    // For ssr (hash)
    const [r, setR] = useState("")

    useEffect(() => {
        if (pathname.includes(ROOT)) {
            appStore.set(ref => {
                ref.activeList = ROOT
            });
            setR(hash.length ? hash : pathname.replace(ROOT, ""))
        } else {
            setR("")
        }
    }, [pathname, hash, ROOT]);

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === ROOT ? "" : ROOT
        })
    }, [ROOT])

    if (routes === "/") {
        return <div className={addClasses("sideEl", pathname === routes ? "active" : "")}>
            <Link to={ROOT} onClick={toggleMenu}
                  className={addClasses("sideTitle", pathname === routes ? "active" : "")}>
                <h2 className="text">Get started</h2>
            </Link>
        </div>
    }

    return <div className="sideEl">
        <div onClick={toggleMenu} className={addClasses("sideTitle",
            activeList !== ROOT && pathname.includes(ROOT) && "active",
            activeList === ROOT && "open"
        )}>
            <div className="titleItem">
                <h2 className="text up">{ROOT.replace("/", "")}</h2>
                {ROOT === "/form" && <span className="info">Immutable</span>}
            </div>
            <ArrowIcon size={14}/>
        </div>
        <ul style={{
            "--height": `calc(var(--el-h) * ${routesKeys.length - 1})`
        }} className={addClasses("list", activeList === ROOT && "activeList")}>
            {routesKeys.map(l => {
                const route = ROOT + routes[l];
                return routes[l] !== ROOT &&
                    <Link key={route} to={route}>
                        <li className={addClasses("item up", routes[l] === r ? "active" : "")}>
                            {routes[l].replace(/(#)|\//, "")}
                        </li>
                    </Link>
            })}
        </ul>
    </div>
}

export default SidebarCategory