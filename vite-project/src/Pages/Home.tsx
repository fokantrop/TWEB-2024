import CarouselBox from '../Components/CarouselBox';
import { CardGroup, Container, Card, Button } from "react-bootstrap";


const Home = () => {
    return (
        <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Наша команда</h2>
                <CardGroup>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/6740305/pexels-photo-6740305.jpeg"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Тренеры</Card.Title>
                            <Card.Text>
                                Наши тренеры - опытные профессионалы с глубокими знаниями и страстью к спорту. Каждый из них привносит свой неповторимый стиль и подход к тренировкам, помогая спортсменам достигать новых высот и раскрывать свой потенциал.
                            </Card.Text>
                            <Button>О нашей команде</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/6455823/pexels-photo-6455823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Программа тренировок</Card.Title>
                            <Card.Text>
                                Наша программа тренировок, составленная опытными тренерами, индивидуально адаптирована под каждого спортсмена. Мы предлагаем эффективные тренировки, персональные консультации и постоянную поддержку, чтобы помочь вам достичь ваших спортивных целей.
                            </Card.Text>
                            <Button>Составить программу</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/6111585/pexels-photo-6111585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Мотивация</Card.Title>
                            <Card.Text>
                                Наши тренеры готовы помочь вам поднять уровень мотивации и вдохновить на новые достижения. С опытом и энтузиазмом они будут рядом с вами, помогая преодолевать трудности и стимулируя к постоянному росту.
                            </Card.Text>
                            <Button>Связаться</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}

export default Home;
