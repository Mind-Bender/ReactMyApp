import './App.css';
import Shrek from './gif/shrek.gif';
import React, { useState } from 'react';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Fone from './img/f1.png';
import Ftwo from './img/f2.png';
import Fthree from './img/f3.png';
import Ffour from './img/f4.png';
import Ffive from './img/f5.png';
import Fsix from './img/f6.png';
import Phone from './img/ph1.png';
import Phtwo from './img/ph2.png';
import Phthree from './img/ph3.png';
import Phfour from './img/ph4.png';
import Phfive from './img/ph5.png';
import Phsix from './img/ph6.png';
import Phseven from './img/ph7.png';
import Pheight from './img/ph8.png';
import Pone from './img/p1.png';
import Ptwo from './img/p2.png';
import Pthree from './img/p3.png';
import Pfour from './img/p4.png';
import Pfive from './img/p5.png';
import Psix from './img/p6.png';
import Pseven from './img/p7.png';
import Peight from './img/p8.png';

function App() {
  const [showGif, setShowGif] = useState(false);

  function showShrekGif() {
    setShowGif(!showGif);
  }

  return (
    <div className="App">
      <button id="buttonS1" onClick={showShrekGif}>Press Me</button>
      {showGif && (
        <img src={Shrek} id="gif" alt="GIF" />
      )}


        <section id="header">
            <a href="#"><img src={Logo} className="logo" alt=""/></a>
            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="cart.html"><FontAwesomeIcon icon={faShoppingBag} /></a></li>
                </ul>
            </div>
        </section>
    
        <section id="hero">
            <h4>Simplicity in the details</h4>
            <h2>Super comfy deals</h2>
            <h1>Find your new style</h1>
            <p>Discover yourself!</p>
            <button>Shop Now</button>
        </section>
    
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img id="feature-img" src={Fone} alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
                <img id="feature-img" src={Ftwo} alt=""/>
                <h6>Free Return</h6>
            </div>
            <div className="fe-box">
                <img id="feature-imgf3" src={Fthree} alt=""/>
                <h6>Promotions</h6>
            </div>
            <div className="fe-box">
                <img id="feature-imgf4" src={Ffour} alt=""/>
                <h6>Best Quality</h6>
            </div>
            <div className="fe-box">
                <img id="feature-imgf5" src={Ffive} alt=""/>
                <h6>Secure Payments</h6>
            </div>
            <div className="fe-box">
                <img id="feature-imgf6" src={Fsix} alt=""/>
                <h6>24/7 Support</h6>
            </div>
        </section>
    
        <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <p>New Modern Collection Spring Summer 2023</p>
            <div className="pro-container">
                <div className="pro">
                    <img src={Phone} alt=""/>
                    <div className="des">
                        <span>zara</span>
                        <h5>Linne Edited T-Shirt</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4>$15</h4>
                        </div>
                        <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                    <div className="pro">
                        <img src={Phtwo} alt=""/>
                        <div className="des">
                            <span>zara</span>
                            <h5>Short Top</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$9</h4>
                            </div>
                            <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </div>
                        <div className="pro">
                            <img src={Phthree} alt=""/>
                            <div className="des">
                                <span>zara</span>
                                <h5>Shirt With High Double Collar</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$29</h4>
                                </div>
                                <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                            </div>
                            <div className="pro">
                                <img src={Phfour} alt=""/>
                                <div className="des">
                                    <span>zara</span>
                                    <h5>Medium Dress</h5>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4>$55</h4>
                                    </div>
                                    <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                </div>
                                <div className="pro">
                                    <img src={Phfive} alt=""/>
                                    <div className="des">
                                        <span>zara</span>
                                        <h5>High Heel Boots</h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4>$53</h4>
                                        </div>
                                        <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                    </div>
                                    <div className="pro">
                                        <img src={Phsix} alt=""/>
                                        <div className="des">
                                            <span>zara</span>
                                            <h5>Sweatshirt with Hood</h5>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <h4>$39</h4>
                                            </div>
                                            <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                        </div>
                                        <div className="pro">
                                            <img src={Phseven} alt=""/>
                                            <div className="des">
                                                <span>zara</span>
                                                <h5>Denim Shorts</h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h4>$35</h4>
                                                </div>
                                                <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                            </div>
                                            <div className="pro">
                                                <img src={Pheight} alt=""/>
                                                <div className="des">
                                                    <span>zara</span>
                                                    <h5>Shirt With Suede Effect</h5>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h4>$59</h4>
                                                    </div>
                                                    <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                                </div>
                </div>
        </section>
    
        <section id="banner" className="section-m1">
            <h4>Mid Season Sale</h4>
            <h2>Up to <span>70% Off</span> - Extra Sale</h2>
            <button className="normal">Explore More</button>
        </section>
    
    
        <section id="product1" className="section-p1">
            <h2>New Collection</h2>
            <p>New Modern Collection Spring Summer 2023</p>
            <div className="pro-container">
                <div className="pro">
                    <img src={Pone} alt=""/>
                    <div className="des">
                        <span>zara</span>
                        <h5>Knit Mini Dress With Hoops</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4>$39</h4>
                        </div>
                        <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                    <div className="pro">
                        <img src={Ptwo} alt=""/>
                        <div className="des">
                            <span>zara</span>
                            <h5>Crocheted Top</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$29</h4>
                            </div>
                            <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </div>
                        <div className="pro">
                            <img src={Pthree} alt=""/>
                            <div className="des">
                                <span>zara</span>
                                <h5>Skirt With Buttons</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$39</h4>
                                </div>
                                <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                            </div>
                            <div className="pro">
                                <img src={Pfour} alt=""/>
                                <div className="des">
                                    <span>zara</span>
                                    <h5>High Heels With Open Heel</h5>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4>$59</h4>
                                    </div>
                                    <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                </div>
                                <div className="pro">
                                    <img src={Pfive} alt=""/>
                                    <div className="des">
                                        <span>zara</span>
                                        <h5>Shirt With Embroidery</h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4>$41</h4>
                                        </div>
                                        <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                    </div>
                                    <div className="pro">
                                        <img src={Psix} alt=""/>
                                        <div className="des">
                                            <span>zara</span>
                                            <h5>Shirt With Graffiti Pattern</h5>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <h4>$41</h4>
                                            </div>
                                            <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                        </div>
                                        <div className="pro">
                                            <img src={Pseven} alt=""/>
                                            <div className="des">
                                                <span>zara</span>
                                                <h5>Cargo Jeans Utility</h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h4>$69</h4>
                                                </div>
                                                <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                            </div>
                                            <div className="pro">
                                                <img src={Peight} alt=""/>
                                                <div className="des">
                                                    <span>zara</span>
                                                    <h5>Knitted Shorts</h5>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h4>$39</h4>
                                                    </div>
                                                    <a id="cart1" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                                                </div>
                </div>
        </section>
    
        <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>Hot Deals</h4>
                <h2>Buy 2 Get 1 Free</h2>
                <span>The best classNameic dress is on sale now</span>
                <button className="white">See More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>Spring/Summer</h4>
                <h2>New Season arrivals</h2>
                <span>We know what you like</span>
                <button className="white">Collection</button>
            </div>
        </section>
    
        <section id="banner3">
            <div className="banner-box">
                <h2>SEASONAL SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>  
            <div className="banner-box banner-box2">
                <h2>NEW COLLECTION</h2>
                <h3>Check Your Recommendations</h3>
            </div>  
            <div className="banner-box banner-box3">
                <h2>SEASONAL SALE</h2>
                <h3>Autumn Collection -50% OFF</h3>
            </div>  
        </section>
    
     <script src="script.js"></script>
    
    </div>
  );
}

export default App;
