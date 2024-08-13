import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../Components/ProductCard';
import { Navbar } from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from '../Components/Footer';
import LoaderSc from '../Components/LoaderSc';

const SearchPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ensure searchTerm is a string
    const searchTerm = (location.state?.searchTerm || '').toString();

    useEffect(() => {
        console.log('Search Term:', searchTerm); // Debugging line
        console.log('Search Results:', location.state?.results); // Debugging line

        const searchResults = location.state?.results || [];
        setResults(searchResults);
        setLoading(false);
    }, [location.state?.results]);

    const title = `Search: ${results.length} found for "${searchTerm}" - M.Yasmeen Designs`;

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <div>
                <h2>Search Results</h2>
                {loading ? (
                    <LoaderSc /> // Display loader while loading
                ) : (
                    <>
                        <h5>{title}</h5>
                        <div className="product-grid">
                            {results.length > 0 ? (
                                results.map((result) => (
                                    <ProductCard
                                        key={result.id}
                                        id={result.id}
                                        image1={result.image1 || "No image"}
                                        image2={result.image2 || "No image"}
                                        title={result.title || "No Name"}
                                        code={result.code || "No Description"}
                                        price={result.price || "No Price"}
                                        collectionName={result.collection || "Unknown Collection"}
                                    />
                                ))
                            ) : (
                                <p>No results found.</p>
                            )}
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchPage;
