import React, { useState } from 'react';
import searchFirebase from "./searchFirebase";

const SearchBar = ({ searchTerm, onSearch, onChange }) => {
    
    return (
        
        <form onSubmit={onSearch}>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={onChange} 
                placeholder="Search..." 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

