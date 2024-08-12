  // App.jsx

  import React, {useState} from "react";
  import { Cards } from "../Components/Cards";
  import {Footer} from "../Components/Footer"
  import { useNavigate } from 'react-router-dom';
  import SearchBar from "../Search/SearchBar";
  import searchFirebase from "../Search/searchFirebase";
  import { Navbar } from "../Navbar/Navbar";
  
  const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchResults = (searchTerm, results) => {
      console.log('Search Term in Home:', searchTerm); // Debugging line
      console.log('Search Results in Home:', results); // Debugging line
      navigate('/search', { state: { searchTerm, results } });
  };

  const handleSearch = async () => {
      const fetchedResults = await searchFirebase(searchTerm);
      handleSearchResults(searchTerm, fetchedResults);

};

    return (
      <>
      <Navbar />
      <h1>Search your Fav Product now</h1>
      <div>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearch={handleSearch} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </div>
      
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/slider3.png" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item active">
        <img src="/slider1.png" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/slider5.png" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/slider4.png" className="d-block w-100 img-fluid" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/slider5.png" className="d-block w-100 img-fluid" alt="..." />
      </div>
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <Cards />
  <Footer />
      </>
    );yoe
  };
  
  export default Home;
  