import {useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";
import ArrowIcon from "../../../assets/icon/ArrowIcon";
import AppLink from "../../appLink";

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

    const closeSideBar = useCallback(() => {
        appStore.set(ref => {
            ref.sidebar = false;
            ref.overlay = false
        })
    }, [])

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === ROOT ? "" : ROOT;
            if (routes === "/") {
                closeSideBar()
            }
        })
    }, [ROOT, routes, closeSideBar])

    if (routes === "/") {
        return <div className={addClasses("sideEl", pathname === routes ? "active" : "")}>
            <AppLink aria-label={"To navigate to the path " + ROOT} to={ROOT} onClick={toggleMenu}
                     className={addClasses("flexCenterSpace sideTitle", pathname === routes ? "active" : "")}>
                <h2 className="text">Get started</h2>
            </AppLink>
        </div>
    }

    return <div className="sideEl">
        <div onClick={toggleMenu} className={addClasses("flexCenterSpace sideTitle",
            activeList !== ROOT && pathname.includes(ROOT) && "active",
            activeList === ROOT && "open"
        )}>
            <div className="flexCenterSpace titleItem">
                <h2 className="text up">{ROOT.replace("/", "")}</h2>
                {ROOT === "/form" && <span className="flexCenter info">Immutable</span>}
            </div>
            <ArrowIcon size={14}/>
        </div>
        <ul style={{
            "--height": `calc(var(--el-h) * ${routesKeys.length - 1})`
        }} className={addClasses("list", activeList === ROOT && "activeList")}>
            {routesKeys.map(l => {
                const route = ROOT + routes[l];
                return routes[l] !== ROOT &&
                    <li key={route}>
                        <AppLink aria-label={"To navigate to the path " + route}
                                 className={addClasses("flexCenter item", routes[l] === r ? "active" : "")}
                                 onClick={closeSideBar} to={route}>
                            {routes[l].replace(/(#)|\//, "")}
                        </AppLink>
                    </li>

            })}
        </ul>
    </div>
}

export default SidebarCategory