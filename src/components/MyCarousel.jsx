
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from "./../assets/img1.png"
import image2 from "./../assets/img2.png";
import image3 from "./../assets/img3.jpg";
import image4 from "./../assets/img4.png";
import image5 from "./../assets/img5.png";
import image6 from "./../assets/img6.jpg";
import image7 from "./../assets/img7.jpg";
import image8 from "./../assets/img8.jpg";
import image9 from "./../assets/img9.jpg";
import image10 from "./../assets/img10.jpg";
import image11 from "./../assets/img11.jpg";
import gif1 from "./../assets/gif1.gif";
import gif2 from "./../assets/gif2.gif";
import gif3 from "./../assets/gif3.gif";
import gif4 from "./../assets/gif4.gif";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain', // la imagen se ajusta al tamaño del contenedor
  backgroundRepeat: 'no-repeat',
  height: '70vh'
}


  const slideImages = [
    {
      url:image1,
    },{
      url:image2,
    },{
      url:image3,
    },{
      url:image4,
    },{
      url:image5,
    },{
      url:image6,
    },{
      url:image7,
    },{
      url:image8,
    },{
      url:image9,
    },{
      url:image10,
    },{
      url:image11,
    },{
      url:gif1,
    },{
      url:gif2,
    },{
      url:gif3,
    },{
      url:gif4,
    },
   
  ];

const MyCarousel= ()=>{
 /* 
    const settings ={
        dots:true,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }

                }
            ]
     };

     return (
        <div>
           <Slider {...settings}>
             {imageList.map((image, index) => (
               <div key={index}>
                 <img src={image} alt={`Slide ${index}`} />
               </div>
             ))}
           </Slider>
        </div>
      ); */

      return(
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      )
}

export default MyCarousel;