import React, { Component } from "react";

class Content extends Component {
  render() {
    return (

      <main className="site-main">
      <section className="home-banner-area" id="home">
        <div className="container h-100">
          <div className="home-banner">
            <div className="text-center">
              <h4>See What a Difference a stay makes</h4>
              <h1>Furama <em>is</em> personal</h1>
              <a className="button home-banner-btn" href="/#">Book Now</a>
            </div>
          </div>
        </div>
      </section>
      <form className="form-search form-search-position">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 gutters-19">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter your keywords.." required />
              </div>
            </div>
            <div className="col-lg-6 gutters-19">
              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <div className="form-select-custom">
                      <select name id>
                        <option value disabled selected>Arrival</option>
                        <option value="8 AM">8 AM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm gutters-19">
                  <div className="form-group">
                    <div className="form-select-custom">
                      <select name id>
                        <option value disabled selected>Number of room</option>
                        <option value="8 AM">8 AM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm gutters-19">
              <div className="form-group">
                <div className="form-select-custom">
                  <select name id>
                    <option value disabled selected>Departure</option>
                    <option value="8 AM">8 AM</option>
                    <option value="12 PM">12 PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm gutters-19">
              <div className="form-group">
                <div className="form-select-custom">
                  <select name id>
                    <option value disabled selected>Adult</option>
                    <option value="8 AM">8 AM</option>
                    <option value="12 PM">12 PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm gutters-19">
              <div className="form-group">
                <div className="form-select-custom">
                  <select name id>
                    <option value disabled selected>Child</option>
                    <option value="8 AM">8 AM</option>
                    <option value="12 PM">12 PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-4 gutters-19">
              <div className="form-group">
                <button className="button button-form" type="submit">Check Availability</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <section className="welcome">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="row no-gutters welcome-images">
                <div className="col-sm-7">
                  <div className="card">
                    <img className src="./img/home/welcomeBanner1.png" alt="" />
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card">
                    <img className src="./img/home/welcomeBanner2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <img className src="./public/img/home/welcomeBanner3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="welcome-content">
                <h2 className="mb-4"><span className="d-block">Welcome</span> to our residence</h2>
                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed moved firmament gathered </p>
                <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed</p>
                <a className="button button--active home-banner-btn mt-4" href="/#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="section-intro text-center pb-80px">
            <div className="section-intro__style">
              <img src="./img/home/bed-icon.png" alt="" />
            </div>
            <h2>Explore Our Rooms</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-explore">
                <div className="card-explore__img">
                  <img className="card-img" src="./img/home/explore1.png" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="card-explore__price">$150.00 <sub>/ Per Night</sub></h3>
                  <h4 className="card-explore__title"><a href="/#">Classic Bed Room</a></h4>
                  <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                  <a className="card-explore__link" href="/#">Book Now <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-explore">
                <div className="card-explore__img">
                  <img className="card-img" src="img/home/explore2.png" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="card-explore__price">$170.00 <sub>/ Per Night</sub></h3>
                  <h4 className="card-explore__title"><a href="/#">Premium Room</a></h4>
                  <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                  <a className="card-explore__link" href="/#">Book Now <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-explore">
                <div className="card-explore__img">
                  <img className="card-img" src="img/home/explore3.png" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="card-explore__price">$190.00 <sub>/ Per Night</sub></h3>
                  <h4 className="card-explore__title"><a href="/#">Family Room</a></h4>
                  <p>Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
                  <a className="card-explore__link" href="/#">Book Now <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-area">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-column text-center">
            <a id="play-home-video" className="video-play-button" href="https://www.youtube.com/watch?v=vParh5wE-tM">
              <span />
            </a>
            <h3>Seaplace</h3>
            <p>View four has said does men saw find dear shy talent</p>
          </div>
        </div>  
      </section>
      <section className="section-padding bg-porcelain">
        <div className="container">
          <div className="section-intro text-center pb-80px">
            <div className="section-intro__style">
              <img src="img/home/bed-icon.png" alt="" />
            </div>
            <h2>Special Facilities</h2>
          </div>
          <div className="special-img mb-30px">
            <img className="img-fluid" src="./img/home/special.png" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-special">
                <div className="media align-items-center mb-1">
                  <span className="card-special__icon"><i className="ti-home" /></span>
                  <div className="media-body">
                    <h4 className="card-special__title">Conference Room</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p>Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-special">
                <div className="media align-items-center mb-1">
                  <span className="card-special__icon"><i className="ti-bell" /></span>
                  <div className="media-body">
                    <h4 className="card-special__title">Swimming Pool</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p>Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card card-special">
                <div className="media align-items-center mb-1">
                  <span className="card-special__icon"><i className="ti-car" /></span>
                  <div className="media-body">
                    <h4 className="card-special__title">Sports Culb</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p>Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="section-intro text-center pb-20px">
            <div className="section-intro__style">
              <img src="./img/home/bed-icon.png" alt="" />
            </div>
            <h2>Our Guest Love Us</h2>
          </div>
          <div className="owl-carousel owl-theme testi-carousel">
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial1.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>Robert Mack</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial2.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>David Alone</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial3.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>Adam Pallin</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="img/home/testimonial1.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>Robert Mack</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial2.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>David Alone</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial3.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>Adam Pallin</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial1.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>Robert Mack</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-carousel__item">
              <div className="media">
                <div className="testi-carousel__img">
                  <img src="./img/home/testimonial2.png" alt="" />
                </div>
                <div className="media-body">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repell endus!</p>
                  <div className="testi-carousel__intro">
                    <h3>David Alone</h3>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="section-intro text-center pb-80px">
            <div className="section-intro__style">
              <img src="./img/home/bed-icon.png" alt="" />
            </div>
            <h2>News &amp; Events</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card card-news">
                <div className="card-news__img">
                  <img className="card-img" src="img/home/explore1.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-news__title"><a href="/#">Hotel companies tipped the scales</a></h4>
                  <ul className="card-news__info">
                    <li><a href="/#"><span className="news-icon"><i className="ti-notepad" /></span> 20th Nov, 2018</a></li>
                    <li><a href="/#"><span className="news-icon"><i className="ti-comment" /></span> 03 Comments</a></li>
                  </ul>
                  <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                  <a className="card-news__link" href="/#">Read More <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card card-news">
                <div className="card-news__img">
                  <img className="card-img" src="./img/home/explore2.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-news__title"><a href="/#">Try your hand inaugural industry crossword</a></h4>
                  <ul className="card-news__info">
                    <li><a href="/#"><span className="news-icon"><i className="ti-notepad" /></span> 20th Nov, 2018</a></li>
                    <li><a href="/#"><span className="news-icon"><i className="ti-comment" /></span> 03 Comments</a></li>
                  </ul>
                  <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                  <a className="card-news__link" href="/#">Read More <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card card-news">
                <div className="card-news__img">
                  <img className="card-img" src="./img/home/explore3.png" alt="" />
                </div>
                <div className="card-body">
                  <h4 className="card-news__title"><a href="/#">Hoteliers resolve to invest in guests</a></h4>
                  <ul className="card-news__info">
                    <li><a href="/#"><span className="news-icon"><i className="ti-notepad" /></span> 20th Nov, 2018</a></li>
                    <li><a href="/#"><span className="news-icon"><i className="ti-comment" /></span> 03 Comments</a></li>
                  </ul>
                  <p>Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order</p>
                  <a className="card-news__link" href="/#">Read More <i className="ti-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
        );
    }
  }
  
  export default Content;