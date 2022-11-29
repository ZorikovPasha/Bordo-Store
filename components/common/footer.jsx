export const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__column">
              <img className="footer__logo" src="images/header-logo.svg" alt="" />
              <a className="footer__link footer__link-inst" href="#">Instagram</a>
              <a className="footer__link footer__link-whatsapp" href="#">WhatsApp</a>
              <a className="footer__link" href="tel:+796977752-">+7 (969) 777-52-00</a>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Clents</p>
              <ul className="footer__column-list footer-list">
                <li className="footer-list__item">
                  <a className="footer-list__link" href="about.html">About Us</a>
                </li>
                <li className="footer-list__item">
                  <a className="footer-list__link" href="#">Policy</a>
                </li>
                <li className="footer-list__item">
                  <a className="footer-list__link" href="#">Questions</a>
                </li>
                <li className="footer-list__item">
                  <a className="footer-list__link" href="delivery.html">Payments & Shipping</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <p className="footer__column-title">Addreses</p>
              <div className="footer__column-box">
                <div className="footer__column-item">
                  <p className="footer__column-text">Bronx, NY 10472</p>
                  <p className="footer__column-text">552 Manchester St. </p>
                </div>
                <div className="footer__column-item">
                  <p className="footer__column-text">Bronx, NY 10472</p>
                  <p className="footer__column-text">552 Manchester St. </p>
                </div>
                <div className="footer__column-item">
                  <p className="footer__column-text">Bronx, NY 10472</p>
                  <p className="footer__column-text">552 Manchester St. </p>
                </div>
                <div className="footer__column-item">
                  <p className="footer__column-text">Bronx, NY 10472</p>
                  <p className="footer__column-text">552 Manchester St. </p>
                </div>
              </div>
            </div>
            <div className="footer__column">
              <form className="footer__form" action="">
                <p className="footer__column-title">Subscribe to our newsletter</p>
                <div className="footer__form-inputwrapper">
                  <input className="footer__form-input" type="email" placeholder="Enter e-mail" />
                  <button className="footer__form-btn" type="submit">
                    <img className="footer__form-imgbtn" src="images/footer-imgbtn.svg" alt="" />
                  </button>
                </div>
                <p className="footer__form-text">I agree with terms and conditions</p>
              </form>
              <div className="footer__link-wrapper">
                <a className="footer__link-share" href="#">Repost in Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}