import React from 'react';
import '../css/SearchBar.css';

function SearchBar(){
    return (
    <>
        <div class="searchBar">
            <input name="search" placeholder="Search..."></input>
            <span>
                <i className="fas fa-search"></i>
            </span>
        </div>
    </>
    );
}

export default SearchBar;