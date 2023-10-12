import React from "react";
import "./Search.css";

const Search =({searchfield})=>{
    return(
        <div className="flex justify-center items-center">
            <div className="search w-[280px] h-[100px] rounded-2xl flex justify-center items-center">
            <input className="searchevent rounded-2xl p-2" type="text" placeholder={searchfield}></input>
            </div>
        </div>
    )
}

export default Search;