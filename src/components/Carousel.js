import Carousel from 'react-bootstrap/Carousel';

function CarouselImg() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Myaktion</h3>
          <p>Migration</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselImg;