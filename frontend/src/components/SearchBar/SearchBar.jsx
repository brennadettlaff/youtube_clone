import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
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
        <form class="input-group" onSubmit={handleSubmit} style={{margin: '15px'}}>
            <input type='search' class="form-control" id="commentBar" className="form-control-rounded" value={search_term} placeholder="Search" 
            aria-label="Search" aria-describedby="search-addon" onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type="button" >search</button>
        </form>
    );
}
 
export default SearchBar;
