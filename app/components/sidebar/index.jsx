import {LIB_NAME, routes} from "../../util/constants";
import SidebarCategory from "./sidebarCategory";
import {useEffect, useRef, useState} from "react";
import {appStore} from "../../store";
import {addClasses} from "../../util";

const Sidebar = () => {

    const sidebarRef = useRef();

    const sidebarOpen = appStore("sidebar")
    const [version, setVersion] = useState("^3");

    useEffect(() => {
        fetch(`https://registry.npmjs.org/${LIB_NAME}`).then(r => r.json()).then(r => {
            setVersion(r['dist-tags'].latest)
        })
    }, []);

    return <aside ref={sidebarRef} className={addClasses("customScroll sidebar", sidebarOpen ? "open" : "")}>
        {Object.keys(routes).map(r => {
            return <SidebarCategory
                key={r}
                hasChild={typeof routes[r] === "object"}
                routesKeys={Object.keys(routes[r])} routes={routes[r]}/>
        })}
        <h1 className="version">{LIB_NAME}@{version}</h1>
    </aside>
}

export default Sidebar