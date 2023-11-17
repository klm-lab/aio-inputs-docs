import {Outlet} from "@remix-run/react";
import "./body.css"
import Sidebar from "../sidebar";
import Footer from "../footer";

const Body = () => {
    return <div className="content">
        <Sidebar/>
        <div className="page">
            <Outlet/>
        </div>
        <Footer/>
    </div>
}

export default Body