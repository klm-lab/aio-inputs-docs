import {Outlet} from "@remix-run/react";
import "./body.css"
import Sidebar from "../sidebar";

const Body = () => {
    return <div className="content">
        <Sidebar/>
        <div className="page">
            <Outlet/>
        </div>
    </div>
}

export default Body