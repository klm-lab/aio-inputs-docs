import useTheme from "../../hook/useTheme";
import Sun from "../../assets/icon/Sun"
import Github from "../../assets/icon/Github";
import Moon from "../../assets/icon/Moon";
import ExternalLink from "../externalLink";
import {GITHUB_LINK} from "../../util/constants"
import SearchIcon from "../../assets/icon/SearchIcon";
import {showSearch} from "../../store";

const RightSide = () => {

    const {loaded, isDark, toggleTheme} = useTheme();

    return loaded && <div className="flexCenter rightIcons">
        <div onClick={showSearch} className="flexCenter icon searchIcon">
            <SearchIcon/>
        </div>
        <div className="flexCenter icon" onClick={toggleTheme}>
            {isDark ? <Sun size={32}/> : <Moon size={32}/>}
        </div>
        <ExternalLink aria-label={"Link to github profile"} to={GITHUB_LINK} className="flexCenter icon">
            <Github/>
        </ExternalLink>
    </div>
}

export default RightSide