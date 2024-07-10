import React from 'react'
//import Slide from 'react-simple-image-slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';




const Home = () => {

  // const [imageNum, setImageNum] = useState(1);
  const images = [
    { imgUrl: "Image/food.jfif" },
    { imgUrl: "Image/food2.jfif" },
    { imgUrl: "Image/food1.jfif" },
   

  ];
  console.log(Carousel);

  return (
    <>
      {/* // Array of image sources
       // Replace with your actual image paths */}

      <div className="container">
        <h2>Food</h2>
        <Carousel>
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img.imgUrl} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="col-md-4 col-sm-6 col-xs-12 home-box-mobile">

          <div className="home-box about-box">
            <h6>About Us</h6>
            <p className='Desc'>Flavorsome indicates good tasting, full of flavor, specifically pleasant flavor; implying delicious, tasty, appetizing, scrumptious, yummy, juicy, succulent, heavenly, inviting, luscious, mouthwatering, palatable, saporous, savory; may be divine, toothsome, and tempting.</p>

          </div>

        </div>
        
      </div>



    </>
  );
}
export default Home
