import "../sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../../util";
import {routes, SIDEBAR} from "../../../util/constants";
import {useCallback, useEffect, useState} from "react";
import {appStore} from "../../../store";

const {
    USE_INPUTS
} = routes;
const R = Object.keys(USE_INPUTS);
const {HOOK} = SIDEBAR;
const useInputsSidebar = () => {

    const {pathname} = useLocation();

    const activeList = appStore("activeList");

    useEffect(() => {
        if (pathname.includes(USE_INPUTS.ROOT)) {
            appStore.set(ref => {
                ref.activeList = HOOK
            });
        }
    }, [pathname]);

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ref.activeList === HOOK ? "" : HOOK
        })
    }, [])

    return <div className="sideEl">
        {/*<Link to={USE_INPUTS} onClick={() => toggleMenu(HOOK)}*/}
        {/*      className={addClasses("sideTitle", pathname === USE_INPUTS ? "active" : "")}>*/}
        {/*    Use inputs</Link>*/}
        <h2 onClick={toggleMenu}
            className="sideTitle">Use inputs</h2>
        <ul style={{
            "--height": `calc(var(--el-h) * ${R.length - 1})`
        }} className={addClasses("list", activeList === HOOK && "activeList")}>
            {R.map(l => {
                return USE_INPUTS[l] !== USE_INPUTS.ROOT && <Link key={USE_INPUTS[l]} to={USE_INPUTS[l]}>
                    <li className={addClasses("item up", pathname === USE_INPUTS[l] ? "active" : "")}>
                        {USE_INPUTS[l].replace(USE_INPUTS.ROOT, "").replace("/", "")} entry
                    </li>
                </Link>
            })}
            {/*<Link to={STRING}>*/}
            {/*    <li className={addClasses("item", pathname === STRING ? "active" : "")}>*/}
            {/*        String entry*/}
            {/*    </li>*/}
            {/*</Link>*/}
            {/*<Link to={ARRAY}>*/}
            {/*    <li className={addClasses("item", pathname === ARRAY ? "active" : "")}>*/}
            {/*        Array entry*/}
            {/*    </li>*/}
            {/*</Link>*/}
            {/*<Link to={OBJECT}>*/}
            {/*    <li className={addClasses("item", pathname === OBJECT ? "active" : "")}>*/}
            {/*        Object entry*/}
            {/*    </li>*/}
            {/*</Link>*/}
        </ul>
    </div>
}

export default useInputsSidebar