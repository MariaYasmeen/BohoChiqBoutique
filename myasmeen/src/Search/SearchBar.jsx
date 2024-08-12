import React from 'react';

const SearchBar = ({ searchTerm, onSearch, onChange }) => {

    const handleSearch = (event) => {
        event.preventDefault(); 
        onSearch(); 
    };

    return (
        <form onSubmit={handleSearch}>
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
