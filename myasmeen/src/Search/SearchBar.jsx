import React from 'react';

const SearchBar = ({ searchTerm, onSearch, onChange }) => {

<<<<<<< HEAD
=======
    const handleSearch = (event) => {
        event.preventDefault(); 
        onSearch(); 
    };
>>>>>>> bdd22d24f7a583954ccd10fba45860157903b53f

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
