import Search from "../search";
import RightSide from "../rightSide";
import Logo from "../logo";

const Header = () => {
    return <header className="fixed size flexCenterSpace header">
        <Logo/>
        <Search/>
        <RightSide/>
    </header>
}

export default Header