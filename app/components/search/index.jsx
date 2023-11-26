import SearchIcon from "../../assets/icon/SearchIcon";
import {useRef} from "react";
import {showSearch} from "../../store";

const Search = () => {

    const ref = useRef(null);

    const openSearch = () => {
        showSearch()
        ref.current.blur()
    }

    return <div className="flexCenterSpace search">
        <SearchIcon/>
        <input ref={ref} onClick={openSearch} type="text" placeholder="Search"/>
    </div>
}

export default Search