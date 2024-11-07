import './App.css';

function ImageCarousel({images}) {
  return (
    <div>
    {
        images.map((image)=>(
<img key={image.src} alt={image.alt} src={image.src} width='100%'></img>
        ))
    }
    </div>
  );
}

export default ImageCarousel;