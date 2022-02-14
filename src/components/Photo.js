import './Photo.css';

function Photo(props){
    const url = props.url;
    return(
        <div>
            <a href={url}>
                <img src={url} alt='Searched photo' height='300'/>
            </a>
        </div>
    );
};

export default Photo;