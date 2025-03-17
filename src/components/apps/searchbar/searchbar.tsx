import "./searchbar.css"
import search from "../../../assets/images/other/search.svg"

export const Searchbar = () => {
    return(
        <div className="Searchbar">
            <input className="Searchbar_input" placeholder="Search"></input>
            <img src={search} style={{filter: "invert(0%) sepia(4%) saturate(0%) hue-rotate(293deg) brightness(102%) contrast(105%)", position: "absolute", left: "5px"}}/>
        </div>
    )
}