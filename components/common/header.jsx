export const Header = () => {

  return (
      <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <nav className="header__top-nav">
              <ul className="header__top-list top-list">
                <li className="top-list__item">
                  <a className="top-list__link" href="about.html">About Us</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Policy</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Questions</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="delivery.html">Payment & Shipping</a>
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
                  <a className="top-contacts__list-link" href="#">Addresses</a>
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
                  <a className="top-list__link" href="about.html">About Us</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Policy</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="#">Questions</a>
                </li>
                <li className="top-list__item">
                  <a className="top-list__link" href="delivery.html">Payment & Shipping</a>
                </li>
              </ul>

              <ul className="header__bottom-list bottom-list">
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="catalogue.html">New arrivals</a>
                </li>
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="category.html">Clothes and Shoes</a>
                </li>
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="#">Stores</a>
                </li>
                <li className="bottom-list__item">
                  <a className="bottom-list__link" href="#">Buyers</a>
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
                  <a className="top-contacts__list-link" href="#">Addresses</a>
                </li>
              </ul>

            </nav>
            <a  className="header__logo" href="main.html">
              <img className="header__logo-img" src="images/header-logo.svg" alt="" />
            </a>
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