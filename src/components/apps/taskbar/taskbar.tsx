import { Tab_Taskbar } from "../../primitives/tab_taskbar/tab_taskbar"
import { Searchbar } from "../searchbar/searchbar"
import "./taskbar.css"

export const Taskbar = () => {
    return(
    <div className="Taskbar">
        <div></div>
        <div className="Taskbar_middle">
            <Tab_Taskbar tabImage="https://preview.redd.it/ne6ukkej06t71.png?auto=webp&s=fbdc1cb1d60306fba3098f7b75a8e01812a97ada" tabName="Win11"></Tab_Taskbar>
            <Searchbar/>
        </div>
        <div className="Taskbar_right"></div>
    </div>)
}