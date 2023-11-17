import "./sidebar.css"
import {routes} from "../../util/constants";
import SidebarCategory from "./sidebarCategory";

const Sidebar = () => {

    return <aside className="sidebar">
        {Object.keys(routes).map(r => {
            return <SidebarCategory key={r} routesKeys={Object.keys(routes[r])} routes={routes[r]}/>
        })}
        <h1 className="version">aio-inputs@2.0.9</h1>
    </aside>
}

export default Sidebar