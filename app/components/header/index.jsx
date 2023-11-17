import Search from "../search";
import RightSide from "../rightSide";
import "./header.css"
import Logo from "../logo";

const Header = () => {
    return <header className="header">
        <Logo/>
        <Search/>
        <RightSide/>
    </header>
}

export default Header