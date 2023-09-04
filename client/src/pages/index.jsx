import React from "react"
import { publicApi } from "../api"
import Slider from "react-slick"
import Link from "next/link"

export default function Home() {
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    publicApi.getItems().then(data => setItems(data)).catch(err => {})
  }, []) 

  const settings = {
    fade: true,
    dots: true,
    arrows: false,
    autoplay: 3000,
  }

  return (
    <main className="main">
      <div className="main-top">
        <div className="main-top__container">
          <Slider className="main-top__slider" {...settings}>
            <div className="main-top__slider-item">
              <div className="main-top__content">
                <h1 className="main-top__title">Skirt for every occasion Spring - Summer 2021</h1>
                <p className="main-top__subtitle">Make your first order today and get $5 discount for the 1st purchase</p>
              </div>
            </div>
            <div className="main-top__slider-item">
              <div className="main-top__content">
                <h1 className="main-top__title">Skirt for every occasion Spring - Summer 2021</h1>
                <p className="main-top__subtitle">Make your first order today and get $5 discount for the 1st purchase</p>
              </div>
            </div>
            <div className="main-top__slider-item">
              <div className="main-top__content">
                <h1 className="main-top__title">Skirt for every occasion Spring - Summer 2021</h1>
                <p className="main-top__subtitle">Make your first order today and get $5 discount for the 1st purchase</p>
              </div>
            </div>
            <div className="main-top__slider-item">
              <div className="main-top__content">
                <h1 className="main-top__title">Skirt for every occasion Spring - Summer 2021</h1>
                <p className="main-top__subtitle">Make your first order today and get $5 discount for the 1st purchase</p>
              </div>
            </div>
            <div className="main-top__slider-item">
              <div className="main-top__content">
                <h1 className="main-top__title">Skirt for every occasion Spring - Summer 2021</h1>
                <p className="main-top__subtitle">Make your first order today and get $5 discount for the 1st purchase</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Новые поступления</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.new).map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container-fluid">
          <div className="banner__inner">
            <div className="banner__content">
              <h2 className="banner__title">Скидки до 30% на все товары</h2>
              <p className="banner__subtitle">Сделайте первый заказ и поулчите скидку до 30%</p>
              <a className="banner__btn btn" href="catalogue.html">К покупкам</a>  
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Джемперы и свитшоты</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "jumper").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Аксессуары</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "accessory").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Брюки и штаны</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "short").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>

          </div>
        </div>
      </section>

      <div className="main-choice">
        <div className="container">
          <div className="main-choice__items">
            <a className="main-choice__item" href="category.html">
              <div className="main-choice__img-wrapper">
                <img className="main-choice__img" src="images/choice-1.jpg" alt="" />
              </div>
              <p className="main-choice__name">Аксессуары</p>
            </a>

            <a className="main-choice__item" href="category.html">
              <div className="main-choice__img-wrapper">
                <img className="main-choice__img" src="images/choice-2.jpg" alt="" />
              </div>
              <p className="main-choice__name">Юбки</p>
            </a>

            <a className="main-choice__item" href="category.html">
              <div className="main-choice__img-wrapper">
                <img className="main-choice__img" src="images/choice-3.jpg" alt="" />
              </div>
              <p className="main-choice__name">Блузки</p>
            </a>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Рубашки и футболки</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "shirt").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Плащи и пальто</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "coat").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="page-section  page-section--last">
        <div className="container">
          <div className="page-section__inner">
            <div className="page-section__top">
              <p className="page-section__name">Костюмы</p>
              <a className="page-section__link" href="category.html">All products</a>
            </div>
            <div className="page-section__items">
              {items.filter(i => i.type === "costume").map(({ id, preview, name, price, colors }) => 
                <div className="page-section__item" key={id}>
                  <Link href={"products/" + id}>
                    <a>
                      <div className="page-section__imgwrapper">
                        <img className="page-section__img" src={preview} alt="" />
                      </div>

                      <p className="page-section__text">{name}</p>
                      <p className="page-section__price">{price}</p>
                      <div className="page-section__colors">
                        {colors.map(c => 
                          <span className="color-ECECEC" style={{ background: c }} key={c}></span>                        
                        )}
                      </div>  
                    </a>
                  </Link>
                </div>                
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
