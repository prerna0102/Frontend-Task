import { useState } from 'react';
import './Home.css';

function Home(props){

    const[query,setQuery] = useState(props.value);

    function onChangeHandler(event){
        setQuery(event.target.value);
    }

    function onKeyPressHandler(event){
        if(event.key === 'Enter'){
            props.onClickHandler(query.toLowerCase());
        }
    }

    return(
        <div className='center'>
            <h1 className='default_margin text-uppercase text-xl' >
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
            <p className='default_margin text-l'>Enter word to search pictures related to it!</p>
            <div>
                <input className='form-control form-control-lg border border-dark rounded-pill card fontAwesome' type='text' placeholder='&#xf002; Word' value={query} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            </div>
        </div>
    );
}

export default Home;