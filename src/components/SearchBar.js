import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props){

    const[query,setQuery] = useState(props.value);

    function onChangeHandler(event){
        setQuery(event.target.value);
    }

    function onKeyPressHandler(event){
        if(event.key === 'Enter'){
            props.onClickHandler(query.toLowerCase());
        }
    }

    return (
    <div>
        <h1>
            <span className='text-primary'>P</span>
            <span className='text-danger'>h</span>
            <span className='text-warning'>o</span>
            <span className='text-success'>t</span>
            <span className='text-primary'>o</span>
            <span className='text-danger'>g</span>
            <span className='text-warning'>r</span>
            <span className='text-primary'>a</span>
            <span className='text-success'>m</span>
        </h1>
        <div className='position input-group mb-3'>
            <input type='text' value={query} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} className="form-control rounded-pill" size="10" placeholder="Type to search related photos"/>
        </div>
    </div>
    );
}

export default SearchBar;