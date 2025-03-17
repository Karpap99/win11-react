import { useState } from "react"
import "./tab_taskbar.css"
import { Tab } from "./type";

export const Tab_Taskbar = (tabProps: Tab) => {
    const [CurrentlyActive, setCurrentlyActive] = useState<boolean>(false);
    const [CurrentlyFocused, setCurrentlyFocused] = useState<boolean>(false);
    return(
    <div className="Tab_Taskbar">
        <img className="Tab_Taskbar_Image" src={tabProps.tabImage} alt=""/>
        {
            CurrentlyActive && !CurrentlyFocused ?
            <div></div> :
            CurrentlyActive && CurrentlyFocused ?
            <div></div> : <></>
        }
    </div>
    )
}