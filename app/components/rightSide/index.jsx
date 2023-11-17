import useTheme from "../../hook/useTheme";
import Sun from "../../assets/icon/Sun"
import Github from "../../assets/icon/Github";
import "./rightSide.css"
import Moon from "../../assets/icon/Moon";
import ExternalLink from "../externalLink";
import {GITHUB_LINK} from "../../util/constants"
import SearchIcon from "../../assets/icon/SearchIcon";

const RightSide = () => {

    const {loaded, isDark, toggleTheme} = useTheme();

    return loaded && <div className="rightIcons">
        <div className="icon searchIcon">
            <SearchIcon/>
        </div>
        <div className="icon" onClick={toggleTheme}>
            {isDark ? <Sun size={32}/> : <Moon size={32}/>}
        </div>
        <ExternalLink to={GITHUB_LINK} className="icon">
            <Github/>
        </ExternalLink>
    </div>
}

export default RightSide