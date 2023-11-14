import "./sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../util";
import {routes, SIDEBAR} from "../../util/constants";
import {useCallback, useState} from "react";

const {
    ROOT, USE_INPUTS, USE_INPUTS_ARRAY,
    USE_INPUTS_OBJECT, USE_INPUTS_STRING
} = routes;
const {HOOK, PROPERTIES, FORM, TRACK} = SIDEBAR;
const Sidebar = () => {

    const {pathname} = useLocation();

    const [open, setOpen] = useState("");

    const toggleMenu = useCallback((target) => {
        setOpen(open => open === target ? "" : target)
    }, [])

    return <aside className="sidebar">
        <div className={addClasses("sideEl", pathname === ROOT ? "active" : "")}>
            <Link to={ROOT} onClick={() => toggleMenu(ROOT)}
                  className={addClasses("sideTitle", pathname === ROOT ? "active" : "")}>
                Get started
            </Link>
        </div>
        <div className="sideEl">
            <Link to={USE_INPUTS} onClick={() => toggleMenu(HOOK)}
                  className={addClasses("sideTitle", pathname === USE_INPUTS ? "active" : "")}>Use inputs</Link>
            <ul style={{
                "--height": "150px"
            }} className={addClasses("list", open === HOOK && "activeList")}>
                <Link to={USE_INPUTS_STRING}>
                    <li className={addClasses("item", pathname === USE_INPUTS_STRING ? "active" : "")}>
                        String entry
                    </li>
                </Link>
                <Link to={USE_INPUTS_ARRAY}>
                    <li className={addClasses("item", pathname === USE_INPUTS_ARRAY ? "active" : "")}>
                        Array entry
                    </li>
                </Link>
                <Link to={USE_INPUTS_OBJECT}>
                    <li className={addClasses("item", pathname === USE_INPUTS_OBJECT ? "active" : "")}>
                        Object entry
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sideEl">
            <h2 onClick={() => toggleMenu(FORM)} className="sideTitle">Form</h2>
            <ul style={{
                "--height": "350px"
            }} className={addClasses("list", open === FORM && "activeList")}>
                <li className="item">getValues</li>
                <li className="item">forEach</li>
                <li className="item">map</li>
                <li className="item">length</li>
                <li className="item">toArray</li>
                <li className="item">toObject</li>
                <li className="item">reset</li>
            </ul>
        </div>
        <div className="sideEl">
            <h2 onClick={() => toggleMenu(TRACK)} className="sideTitle">Track inputs</h2>
            <ul style={{
                "--height": "400px"
            }} className={addClasses("list", open === TRACK && "activeList")}>
                <li className="item">useValues</li>
                <li className="item">getValues</li>
                <li className="item">forEach</li>
                <li className="item">map</li>
                <li className="item">length</li>
                <li className="item">toArray</li>
                <li className="item">toObject</li>
                <li className="item">reset</li>
            </ul>
        </div>
        <div className="sideEl">
            <h2 onClick={() => toggleMenu(PROPERTIES)} className="sideTitle">Properties</h2>
            <ul style={{
                "--height": "100px"
            }} className={addClasses("list", open === PROPERTIES && "activeList")}>
                <li className="item">inputs</li>
                <li className="item">validation</li>
            </ul>
        </div>
        <h1 className="version">aio-inputs@2.0.9</h1>
    </aside>
}

export default Sidebar