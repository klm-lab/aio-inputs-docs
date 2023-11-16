import "./sidebar.css"
import {Link, useLocation} from "@remix-run/react";
import {addClasses} from "../../util";
import {routes} from "../../util/constants";
import {useCallback} from "react";
import UseInputsSideBar from "./useInputsSideBar";
import FormSideBar from "./formSideBar";
import {appStore} from "../../store";
import TrackSideBar from "./trackSideBar";
import PropertiesSidebar from "./propertiesSideBar";

const {
    ROOT,
} = routes;
const Sidebar = () => {

    const {pathname} = useLocation();

    const toggleMenu = useCallback(() => {
        appStore.set(ref => {
            ref.activeList = ""
        })
    }, [])

    return <aside className="sidebar">
        <div className={addClasses("sideEl", pathname === ROOT ? "active" : "")}>
            <Link to={ROOT} onClick={toggleMenu}
                  className={addClasses("sideTitle", pathname === ROOT ? "active" : "")}>
                Get started
            </Link>
        </div>
        <UseInputsSideBar/>
        <FormSideBar/>
        <TrackSideBar/>
        <PropertiesSidebar/>
        <h1 className="version">aio-inputs@2.0.9</h1>
    </aside>
}

export default Sidebar