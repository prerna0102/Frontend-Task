import Photo from './Photo';
import './Gallery.css';

function Gallery(props){
    const images=props.images;

    return (
        <div className='gallery'>
            {images.map((image) => (
                <Photo className="border-dark" url={image.urls.regular}/>
            ))}
        </div>
    );
}

export default Gallery;