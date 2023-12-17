import {routes} from "../../util/constants";
import SidebarCategory from "./sidebarCategory";
import {useRef} from "react";
import {appStore} from "../../store";
import {addClasses} from "../../util";

const Sidebar = () => {

    const sidebarRef = useRef();

    const sidebarOpen = appStore("sidebar")

    return <aside ref={sidebarRef} className={addClasses("customScroll sidebar", sidebarOpen ? "open" : "")}>
        {Object.keys(routes).map(r => {
            return <SidebarCategory
                key={r}
                hasChild={typeof routes[r] === "object"}
                routesKeys={Object.keys(routes[r])} routes={routes[r]}/>
        })}
        <h1 className="version">aio-inputs@3.1.3</h1>
    </aside>
}

export default Sidebar