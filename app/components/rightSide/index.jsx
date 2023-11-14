import useTheme from "../../hook/useTheme";
import Sun from "../../assets/icon/Sun"
import Github from "../../assets/icon/Github";
import "./rightSide.css"
import Moon from "../../assets/icon/Moon";

const RightSide = () => {

    const {isDark,toggleTheme} = useTheme();

    return <div className="rightIcons">
        <div className="icon" onClick={toggleTheme}>
            {isDark ? <Sun size={32}/> : <Moon size={32}/>}
        </div>
        <div className="icon">
            <Github/>
        </div>
    </div>
}

export default RightSide