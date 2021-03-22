import React from 'react';
import '../css/SearchBar.css';

function SearchBar(){
    return (
    <>
        <div className="searchBar">
            <input name="search" placeholder="Search..."/>
            <span>
                <i className="fas fa-search"/>
            </span>
        </div>
    </>
    );
}

export default SearchBar;