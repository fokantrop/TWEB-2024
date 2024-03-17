import Carousel from 'react-bootstrap/Carousel';
import gymImg from '../assets/gym.jpg'
import agymImg from '../assets/agym.jpg'

const CarouselBox = () => {
    return (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={gymImg}
                alt="Gym"
            />
            <Carousel.Caption>
                <h3>Gym image</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quos!</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={agymImg}
                alt="Gym"
            />
            <Carousel.Caption>
                <h3>Gym image</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quos!</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={gymImg}
                alt="Gym"
            />
            <Carousel.Caption>
                <h3>Gym image</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quos!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default CarouselBox;
