import Link from "next/link"
import { ROUTES } from "../../utils/const"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <nav className="header__top-nav">
              <ul className="header__top-list top-list">
                <li className="top-list__item">
                  <Link href={ROUTES.about}>
                    <a className="top-list__link">О Нас</a>
                  </Link>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Политика конфиденциальности</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="delivery.html">Доставка и оплата</a>
                </li>
              </ul>
            </nav>
            <div className="header__top-contacts">
              <ul className="header__top-contactslist top-contacts__list">
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link top-contacts__list-inst" href="#">Instagram</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link top-contacts__list-viber" href="#">WhatsApp</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link" href="tel:+79697775200">+7 (969) 777-52-00</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link" href="#">Адреса</a>
                </li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
      <button className="menu-btn">
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
      </button>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <nav className="header__bottom-nav">
              <ul className="header__top-list top-list">
                <li className="top-list__item">
                  <Link href={ROUTES.about}>
                    <a className="top-list__link">О Нас</a>
                  </Link>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Политика конфиденциальности</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="delivery.html">Доставка и оплата</a>
                </li>
              </ul>

              <ul className="header__bottom-list bottom-list">
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="catalogue.html">Новые поступления</a>
                </li>
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="category.html">Одежда и обувь</a>
                </li>
              </ul>

              <ul className="header__top-contactslist top-contacts__list">
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link top-contacts__list-inst" href="#">Instagram</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link top-contacts__list-viber" href="#">WhatsApp</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link" href="tel:+79697775200">+7 (969) 777-52-00</a>
                </li>
                <li className="top-contacts__list-item">
                  <a className="top-contacts__list-link" href="#">Адресы</a>
                </li>
              </ul>

            </nav>
            <Link href="/">
              <a className="header__logo" >
                <img className="header__logo-img" src="images/header-logo.svg" alt="" />
              </a>
            </Link>
            <nav className="header__user-nav user-nav">
              <ul className="user-nav__list">
                <li className="user-nav__item">
                  <a className="user-nav__link" href="profile.html">
                    <img className="user-nav__img" src="images/user-nav-1.svg" alt="" />
                  </a>
                </li>
                <li className="user-nav__item">
                  <a className="user-nav__link" href="#">
                    <img className="user-nav__img" src="images/user-nav-2.svg" alt="" />
                  </a>
                </li>

                <li className="user-nav__item">
                  <a className="user-nav__link" href="favorite.html">
                    <img className="user-nav__img" src="images/user-nav-3.svg" alt="" />
                  </a>
                </li>

                <li className="user-nav__item">
                  <a className="user-nav__link" href="basket.html">
                    <img className="user-nav__img" src="images/user-nav-4.svg" alt="" />
                  </a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}