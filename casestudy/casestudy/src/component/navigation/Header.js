import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header class="header_area">
            <div class="header-top">
              <div class="container">
                <div class="d-flex align-items-center">
                  <div id="logo">
                    <a href="index.html"><img style={{width: "50%", height: "50%",position:"relative",right: "160px"}} src="https://www.furama.com/images/LOGOFurama_4C_Normal.png" alt="" title="" /></a>
                  </div>
                  <div class="ml-auto d-none d-md-block d-md-flex">
                    <div class="media header-top-info">
                      <span class="header-top-info__icon"><i class="fas fa-phone-volume"></i></span>
                      <div class="media-body">
                        <p>Have any question?</p>
                        <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                      </div>
                    </div>
                    <div class="media header-top-info">
                      <span class="header-top-info__icon"><i class="ti-email"></i></span>
                      <div class="media-body">
                        <p>Have any question?</p>
                        <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
            <div class="main_menu">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
              
                <a class="navbar-brand logo_h" href="index.html"><img src="casestudy/public/img/Logo.png" alt=""/></a> 
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
             
                  <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav">
                      <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                      <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                      <li class="nav-item"><a class="nav-link" href="properties.html">Villa</a></li>
                      <li class="nav-item"><a class="nav-link" href="gallery.html">House</a></li>
                      <li class="nav-item"><a class="nav-link" href="contact.html">Room</a></li>
                    </ul>
                  </div>
        
                  <ul class="social-icons ml-auto">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i class="fas fa-rss"></i></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            </header>
        );
    }
}

export default Header;