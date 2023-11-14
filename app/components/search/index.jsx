import "./search.css"
import SearchIcon from "../../assets/icon/SearchIcon";
const Search = () => {
    return <div className="search">
        <SearchIcon/>
        <input type="text" placeholder="Search"/>
    </div>
}

export default Search