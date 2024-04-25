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
                <h3>Сила. Выносливость. Дисциплина.</h3>
                <p>Всё это начинается здесь, в тренажерном зале.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={agymImg}
                alt="Gym"
            />
            <Carousel.Caption>
                <h3>Превращай мечты в реальность.</h3>
                <p>Начни сегодня с тренажерного зала.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={gymImg}
                alt="Gym"
            />
            <Carousel.Caption>
                <h3>Сила не приходит от покоя.</h3>
                <p>Приведи свои мечты в движение в тренажерном зале.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default CarouselBox;
