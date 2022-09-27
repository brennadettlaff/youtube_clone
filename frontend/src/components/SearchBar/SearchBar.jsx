import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import './SearchBar.css';

const SearchBar = (props) => {

    // console.log(props.data)

    let navigate = useNavigate();

    const [search_term, setSearchTerm] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search_term)
        props.submittedSearchTerm(search_term)
        navigate('/searchpage')
    };

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input type='text' value={search_term} placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)}/>
            <input type='submit' value="Search"/>
        </form>
    );
}
 
export default SearchBar;
