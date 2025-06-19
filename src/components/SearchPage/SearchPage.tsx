import "./SearchPageCss/SearchPage.css";
import { useState, useEffect } from "react";
import { Products } from '../ProductList/ProductList';
import { Link } from 'react-router-dom';
// img content 
import loupeGrey from '../../images/svg_elements/Elements/loupeGrey.svg';

interface SearchProps {
    isMenuOpen: boolean;
}

interface ProductResult {
    id: number;
    name: string;
    price: number;
    img: string;
}


// isMenuOpen
function SearchPage({  }: SearchProps) {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<ProductResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const handleSearch = () => {
        if (!query.trim()) {
            setResults([]);
            setShowResults(false);
            return;
        }

        setIsLoading(true);
        setError(null);

        setTimeout(() => {
            try {
                const filteredResults = Products.filter(product =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredResults);
                setShowResults(true);
            } catch (err) {
                setError('Произошла ошибка при поиске');
            } finally {
                setIsLoading(false);
            }
        }, 300);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    const handleResultClick = () => {
        setShowResults(false);
        setQuery('');
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
        if (query) {
            setShowResults(true);
        }
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsInputFocused(false);
            setShowResults(false);
        }, 200);
    };

    return (
        <>
            <div className="search-Header open">
                <div className="search-div">
                    <div className="search-up">
                        <label htmlFor="search" className="Search-label">
                            <div className="search-input">
                                <button className="img-search" onClick={handleSearch} disabled={isLoading}>
                                    <img src={loupeGrey} alt="Search" />
                                </button>
                                <input 
                                    type="text" 
                                    id="search" 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Find your plants" 
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                            </div>
                        </label>
                    </div>

                    {isInputFocused && (
                        <div className="search-overlay">
                            <div className="search-modal SearchPage">
                                {showResults && (
                                    <div className="search-results-container">
                                        {isLoading ? (
                                            <div className="loading">Loading...</div>
                                        ) : error ? (
                                            <div className="error-message">{error}</div>
                                        ) : results.length > 0 ? (
                                            <ul className="search-results-list">
                                                {results.map((product) => (
                                                    <Link to={`/product/${product.id}`} key={product.id}>
                                                        <li key={product.id} onClick={handleResultClick}>
                                                            <div className="search-result-item">
                                                                <img 
                                                                    src={product.img} 
                                                                    alt={product.name} 
                                                                    className="search-result-image"
                                                                />
                                                                <div className="search-result-info">
                                                                    <h3 className="title-product-Section_2">{product.name}</h3>
                                                                    <p className="current-price">${product.price.toFixed(2)}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </Link>
                                                ))}
                                            </ul>
                                        ) : query ? (
                                            <div className="no-results">No products found</div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchPage;