import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
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
        );
    }
}

export default Nav;