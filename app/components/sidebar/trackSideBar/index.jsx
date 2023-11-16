import "../sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {routes, SIDEBAR} from "../../../util/constants";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";
import ArrowIcon from "../../../assets/icon/ArrowIcon";

const {TRACK: TRACK_ROUTE} = routes;
const R = Object.keys(TRACK_ROUTE);
const {TRACK} = SIDEBAR;
const TrackSidebar = () => {

    const {pathname, hash} = useLocation();

    const activeList = appStore("activeList");

    // For ssr
    const [r, setR] = useState("")

    useEffect(() => {
        if (pathname.includes(TRACK_ROUTE.ROOT)) {
            appStore.set(ref => {
                ref.activeList = TRACK
            });
            setR(hash)
        } else {
            setR("")
        }
    }, [pathname, hash]);

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === TRACK ? "" : TRACK
        })
    }, [])

    return <div className="sideEl">
        <div onClick={toggleMenu} className={addClasses("sideTitle",
            activeList !== TRACK && pathname.includes(TRACK_ROUTE.ROOT) && "active",
            activeList === TRACK && "open"
            )}>
            <h2 className="text">Track</h2>
            <ArrowIcon size={14}/>
        </div>
        <ul style={{
            "--height": `calc(var(--el-h) * ${R.length - 1})`
        }} className={addClasses("list", activeList === TRACK && "activeList")}>
            {R.map(l => {
                const route = TRACK_ROUTE.ROOT + TRACK_ROUTE[l];
                return TRACK_ROUTE[l] !== TRACK_ROUTE.ROOT && <Link key={route} to={route}>
                    <li className={addClasses("item", TRACK_ROUTE[l] === r ? "active" : "")}>
                        {TRACK_ROUTE[l].replace("#", "")}
                    </li>
                </Link>
            })}
        </ul>
    </div>
}

export default TrackSidebar