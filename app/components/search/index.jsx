import "./search.css"
import SearchIcon from "../../assets/icon/SearchIcon";
import {useCallback, useRef} from "react";
import {appStore} from "../../store";

const Search = () => {

    const ref = useRef(null);

    const openSearch = useCallback(() => {
        appStore.set(ref => {
            ref.overlay = true
        });
        ref.current.blur()
    }, [ref])

    return <div className="search">
        <SearchIcon/>
        <input ref={ref} onClick={openSearch} type="text" placeholder="Search"/>
    </div>
}

export default Search