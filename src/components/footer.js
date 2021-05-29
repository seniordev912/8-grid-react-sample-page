import React, { Component } from 'react'
import  '../footer.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
export class Footer extends Component {

    render() {
        return (
                <div className="footer">
                   <div className="container">
                       <div className="main-content">
                           <div className="footer-content">
                                <div>
                                    <h5>Travel is for<br /> everyone<em>.</em></h5>
                                    <div className="socail-icon">
                                        <a href="https://www.youtube.com/channel/UCco2rGStn1-mtT9Hukd26Zg"><YouTubeIcon /></a>
                                        <a href="https://twitter.com/CuddlyNest"><TwitterIcon /></a>
                                        <a href="https://www.facebook.com/CuddlyNest"><FacebookIcon /></a>
                                        <a href="https://www.instagram.com/cuddlynest/"><InstagramIcon /></a>
                                        <a href="https://www.pinterest.com/CuddlyNest"><PinterestIcon /></a>
                                    </div>
                                </div>
                                <div className="angery">
                                    <div>
                                        <ul className="footer-menu">
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Help</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Privacy policy</a></li>
                                            <li><a href="#">Terms and conditions</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="footer-menu">
                                            <li><a href="#">Press releases</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mobile-social">
                                <a href="https://www.youtube.com/channel/UCco2rGStn1-mtT9Hukd26Zg"><YouTubeIcon /></a>
                                        <a href="https://twitter.com/CuddlyNest"><TwitterIcon /></a>
                                        <a href="https://www.facebook.com/CuddlyNest"><FacebookIcon /></a>
                                        <a href="https://www.instagram.com/cuddlynest/"><InstagramIcon /></a>
                                        <a href="https://www.pinterest.com/CuddlyNest"><PinterestIcon /></a>
                                </div>
                            </div>
                        <div className="copyright">
                            <div className="copyR_box"> 
                                <p><a href="https://www.cuddlynest.com/">CuddlyNest</a> © 2020.</p>
                                <p>Made with <FavoriteRoundedIcon className="heart" /> from Chicago</p> 
                            </div>
                            <div className="memberOf_box"> 
                                <em>CuddlyNest is a member of</em><span className="verma_icon"> VRMA</span> 
                            </div>
                            <div className="verma_ic">
                                <span>VRMA</span>
                            </div>
                       </div>
                        
                        </div>
                   </div>
                </div>
        )
    }
}

export default Footer;
