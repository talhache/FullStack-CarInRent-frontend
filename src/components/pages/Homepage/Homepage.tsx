import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Main.module.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className={style.rodCarusel}>
      <div className={style.carusel}>
        <Carousel>
          <CarouselItem>
            <ul className={style.hoverEffectScale}>
              <li>
                <img
                  className="d-block w-100"
                  src="https://99px.ru/sstorage/53/2015/07/tmb_138199_9420.jpg"
                  alt="First slide"
                />
                <div>
                  <p>Тысячи автомобилей для каждого</p>
                  <Link to="/Catalog">Перейти к каталогу</Link>
                </div>
              </li>
            </ul>
          </CarouselItem>
          <CarouselItem className={style.carusel}>
            <ul className={style.hoverEffectScale}>
              <li>
                <img
                  className="d-block w-100"
                  src="https://99px.ru/sstorage/53/2015/12/tmb_154087_1126.jpg"
                  alt="Second slide"
                />
                <div>
                  <h3>Регистрируйся и присоединяйся к нашей команде</h3>
                  <Link to="/SignUp">Войти</Link>
                </div>
              </li>
            </ul>
          </CarouselItem>
          <CarouselItem className={style.carusel}>
            <ul className={style.hoverEffectScale}>
              <li>
                <img
                  className="d-block w-100"
                  src="https://s9.travelask.ru/uploads/post/000/011/069/main_image/full-3df26945cd53449d133ce2409b341234.jpg"
                  alt="Second slide"
                />
                <div>
                  <h3>Удобный поиск автомобилей по маркам</h3>
                  <Link to="/marks">Марки</Link>
                </div>
              </li>
            </ul>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
