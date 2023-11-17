import useTheme from "../../hook/useTheme";
import Sun from "../../assets/icon/Sun"
import Github from "../../assets/icon/Github";
import "./rightSide.css"
import Moon from "../../assets/icon/Moon";
import {useEffect, useState} from "react";
import {Link} from "@remix-run/react";

const RightSide = () => {

    // For ssr
    const [s, setS] = useState(false);

    useEffect(() => {
        setS(true)
    }, []);

    const {isDark, toggleTheme} = useTheme();

    return s && <div className="rightIcons">
        <div className="icon" onClick={toggleTheme}>
            {isDark ? <Sun size={32}/> : <Moon size={32}/>}
        </div>
        <Link className="icon" to="https://github.com/klm-lab/inputs" target="_blank" rel="noopener noreferrer">
            <Github/>
        </Link>
    </div>
}

export default RightSide