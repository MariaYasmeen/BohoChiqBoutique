import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ProductCard } from '../Components/ProductCard';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Components/Footer';
import LoaderSc from '../Components/LoaderSc';
import { useTitle } from '../Context/TitleContext';

const SearchPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle({title}); 
    }, [setTitle]);


    const searchTerm = (location.state?.searchTerm || '').toString();

    useEffect(() => {
        console.log('Search Term in SearchPage:', searchTerm); // Debugging line
        console.log('Search Results in SearchPage:', location.state?.results); // Debugging line

        const searchResults = location.state?.results || [];
        setResults(searchResults);
        setLoading(false);
    }, [location.state?.results]);

    const title = `Search: ${results.length} results found for  "${searchTerm}" - M.Yasmeen Designs`;

    useEffect(() => {
        console.log('Setting title to:', title); // Debugging line
    }, [title]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <div>
                <h2>{searchTerm}</h2>
                {loading ? (
                    <LoaderSc />
                ) : (
                    <>
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
