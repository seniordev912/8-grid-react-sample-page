import React, { Component } from 'react';
import '../content.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Counterbutton from './counterbutton';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import gplus from './gplus.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

export default class Content1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate1:new Date(),
            startDate2:new Date(),
            open:false,
        }
        this.share=this.share.bind(this);
        this.location=this.location.bind(this);
        this.description=this.description.bind(this);
        this.policies=this.policies.bind(this);
        this.select=this.select.bind(this);
        this.login=this.login.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.showtable=this.showtable.bind(this);
        this.closerow=this.closerow.bind(this);
        this.mobile_showtable=this.mobile_showtable.bind(this);
        this.mobile_closetable=this.mobile_closetable.bind(this);
    }
    
    showtable(){
        document.getElementById("hotel_title").style.display="none";
        document.getElementsByClassName("hotel_list")[0].style.display="table-row";
        document.getElementsByClassName("hotel_list")[1].style.display="table-row";
    }

    closerow(){
        document.getElementsByClassName("hotel_list")[0].style.display="none";
        document.getElementsByClassName("hotel_list")[1].style.display="none";
        document.getElementById("hotel_title").style.display="table-row";
    }


    login(){
        this.setState({open:true});
    }

    handleClose(){
        this.setState({open:false});
    }


    select(){
        let top = document.getElementById('list').offsetTop;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
    }

    location(){
        let test=document.getElementById("test").offsetHeight;
        let top = document.getElementById('location').offsetTop-test;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
    }

    description(){
        let test=document.getElementById("test").offsetHeight;
        let top = document.getElementById('description').offsetTop-test;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
    }

    policies(){
        let test=document.getElementById("test").offsetHeight;
        let top=document.getElementById("policies").offsetTop-test;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
    }

    mobile_showtable(){
        document.getElementById("show_mobile_icon").style.display="table-row";
        document.getElementById("hotel_title_mobile").style.display="none";
        document.getElementsByClassName("hotel_list")[0].style.display="table-row";
        document.getElementsByClassName("hotel_list")[1].style.display="table-row";
    }

    mobile_closetable(){
        document.getElementById("show_mobile_icon").style.display="none";
        document.getElementById("hotel_title_mobile").style.display="table-row";
        document.getElementsByClassName("hotel_list")[0].style.display="none";
        document.getElementsByClassName("hotel_list")[1].style.display="none";
    }
    
    share(){
        document.getElementById("hotel").style.display="table-row";
        document.addEventListener('click', this.closeMenu);
    }

    closeMenu =() => {
        document.getElementById("hotel").style.display="none";
        document.removeEventListener('click', this.closeMenu);
    }

    render() {
        const{startDate1,startDate2}=this.state;
        return (
            <div className="content2">
                <div className="mup_wrapper" id="list"> 
                    <div className="container">
                        <div className="listname_con">
                            <div className="headsave_box">
                                <div>
                                    <h1>Novum Hotel Holstenwall Hamburg Neustadt</h1>
                                </div>
                                <div className="save_btn">
                                    <div className="link"><a onClick={this.login}><FavoriteBorderOutlinedIcon style={{color:"#f96d9c"}} />&nbsp;<span>Save to wishlist</span></a></div>
                                    <div style={{position:"relative"}}>
                                        <div className="link"><a onClick={this.share}><BackupOutlinedIcon />&nbsp;<span>Share this hotel</span></a></div>
                                        <ul className="hotel" id="hotel">
                                            <div className="close_menu">
                                                <CloseIcon />
                                            </div>
                                            <li><a href="https://www.cuddlynest.com/hotel/novum-hotel-holstenwall-hamburg-neustadt-306637">Copy link</a></li>
                                            <li><a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.cuddlynest.com%2Fhotel%2Fnovum-hotel-holstenwall-hamburg-neustadt-306637" target="_blank">Facebook</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="list_acotype">
                                <span>HOTEL</span>&nbsp;<StarRateRoundedIcon /><StarRateRoundedIcon /><StarRateRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="insidemenu_wrap" id="test">
                    <div className="container">
                        <div className="insidemenu_box">
                            <ul>
                                <li onClick={()=>this.select()}>Select rooms</li>
                                <li onClick={()=>this.location()}>Location</li>
                                <li onClick={()=>this.description()}>Description</li>
                                <li onClick={()=>this.policies()}>Accommodation policies</li>
                            </ul>
                        </div>
                        <div className="mobile_menu">
                            <select>
                                <option value="0">Select rooms</option>
                                <option value="1">Location</option>
                                <option value="2">Description</option>
                                <option value="3">Accommodation policies</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* ********************************* Calendar display part ****************************************** */}
                <div className="lbv2deskbook_wrap">
                    <div className="container">
                        <div className="mup_filter_box">
                            <div className="calendar">
                                <div>
                                <DatePicker
                                    selected={startDate1}
                                        onChange={date => this.setState({startDate1:date})}
                                        dateFormat="MMMM d, yyyy"
                                        style={{zIndex: '100'}} 
                                    />
                                </div>
                                <div>
                                    <ArrowForwardRoundedIcon />
                                </div>
                                <div>
                                    <DatePicker
                                        selected={startDate2}
                                            onChange={date => this.setState({startDate2:date})}
                                            dateFormat="MMMM d, yyyy"
                                            style={{zIndex: '100'}} 
                                    />
                                </div>
                            </div>
                            <div>
                                <Counterbutton />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hotel_room">
                    <div className="container">
                        <div className="hotel_lists">
                            <h4 className="room">Rooms</h4>
                            <table className="list_table">
                                <thead>
                                    <tr>
                                        <th>Rooms</th>
                                        <th>Guests</th>
                                        <th>Amenities and services</th>
                                        <th>Policies</th>
                                        <th>Average price per room</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="hotel_title">
                                        <td>Economy Single Room</td>
                                        <td>1 guests</td>
                                        <td></td>
                                        <td></td>
                                        <td>$58/night</td>
                                        <td><ExpandMoreRoundedIcon onClick={this.showtable} style={{cursor:"pointer"}} /></td>
                                    </tr>
                                    <tr id="hotel_title_mobile">
                                        <td>Economy Single Room</td>
                                        <td>$58/night</td>
                                        <td><ExpandMoreRoundedIcon onClick={this.mobile_showtable} style={{cursor:"pointer"}} /></td>
                                    </tr>
                                    <tr id="show_mobile_icon" style={{textAlign:"right"}}><ExpandLessRoundedIcon onClick={this.mobile_closetable} style={{cursor:"pointer"}} /></tr>
                                    <tr className="hotel_list">
                                        <td rowSpan="2"><img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/15ea929f303a020236a7a5ae06ba0563.jpg" style={{maxWidth:"200px"}} alt="img" />
                                            <p><b>Economy Single Room</b></p>
                                            <p>Size: 8 m<sup>2</sup></p>
                                        </td>
                                        <td>1 guest</td>
                                        <td>
                                            <ul>
                                                <li>1 Free Breakfast</li>
                                                <li>Non-smoking</li>
                                                <li>Has Window</li>
                                                <li>Hairdryer</li>
                                                <li>Cable Channels</li>
                                                <li>TV</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Instant Confirmation</li>
                                                <li>Refund on cancellation before 17 Jun 2020 (12:00 PM) - $146.96</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <div><span className="price">$58</span>/night $140 total</div>
                                            <div className="book_btn_block">
                                                <Button variant="contained" className="book_room_btn" >
                                                    Book this room
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="expand"><ExpandLessRoundedIcon onClick={this.closerow} style={{cursor:"pointer"}} /></td>
                                    </tr>
                                    <tr className="hotel_list">
                                        <td>1 guest</td>
                                        <td>
                                            <ul>
                                                <li>1 Free Breakfast</li>
                                                <li>Non-smoking</li>
                                                <li>Has Window</li>
                                                <li>Hairdryer</li>
                                                <li>Cable Channels</li>
                                                <li>TV</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Instant Confirmation</li>
                                                <li>Refund on cancellation before 17 Jun 2020 (12:00 PM) - $146.96</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <div><span className="price">$65</span>/night $147 total</div>
                                            <div className="book_btn_block">
                                                <Button variant="contained" className="book_room_btn" >
                                                    Book this room
                                                </Button>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ******************************************* Google Map display Part ***************************************** */}
                <div className="location_con" id="location">
                    <div className="container">
                        <div className="location_conhead">Location</div>
                        <div className="mup_introm_location">
                            <h2>Holstenwall 19, Hamburg, Hamburg, 20355, Germany</h2>
                        </div>
                        <div className="container_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75940.63975502492!2d9.936656189650195!3d53.50160527978827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sgr!4v1590155480367!5m2!1sen!2sgr" className="google-map" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>

                {/* ************************************************ Description Display Part ************************************ */}
                <div className="ldh_box" id="description">
                    <div className="container">
                        <div className="content">
                            <div>
                                <h3 className="description_head">Description</h3>
                                <div>
                                    <h3>The Space</h3>
                                    <div>
                                    <p> This 3-star hotel is located in the centre of Hamburg, a 5-minute walk from the world-famous Reeperbahn entertainment mile. Free Wi-Fi is available at Novum Hotel Holstenwall Hamburg Neustadt.<br /><br />The hotel features a traditional brick fa?ade and brightly furnished rooms with a modern decor. All rooms include satellite TV and a modern bathroom with shower.<br /><br />A breakfast buffet is served daily from 07:00 to 11:00 in the breakfast room, which features red décor and large windows.<br /><br />Novum Hotel Holstenwall Hamburg Neustadt is a 10-minute walk from the Landungsbrücken Landing Bridges and 15 minutes from Hamburg’s CCH Exhibition Centre. St. Pauli Underground Station is 350 metres away.<br /><br />The hotel has a 24-hour reception, which can book tickets for Hamburg’s 3 nearby musical theatres.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ************************************************ Accommodation Policies ***************************************** */}
                <div>
                    <div className="container" id="policies">
                        <div className="content">
                            <div className="accompol_con" >
                                <h3>Accommodation policies</h3>
                                <div className="accompol_box">
                                    <ul>
                                        <li>
                                            <span className="chk_name">Checkin</span>
                                            <span>2:00 PM</span>
                                        </li>
                                        <li>
                                        <label>Checkout</label>
                                            <span>11:00 AM</span>
                                        </li>
                                        <li>
                                            <label>Cancellation</label>
                                            <span>
                                                <p>Cancellation policy varies with the check-in dates. Please select the checkin/checkout date to see the cancellation policy for those dates.</p>
                                                <p>CuddlyNest service fee is non-refundable.</p>
                                            </span>
                                        </li>
                                        <li className="minstwy">
                                            <label>Minimum Stay </label>
                                            <span>1  night</span>
                                        </li>
                                        <li>
                                            <label>Rules</label>
                                            <span><p><b>Child</b>: Max. guests per room: 4.<br /><b>Meal</b>: Buffet breakfast&nbsp;No price<br /><b>Pet</b>: Pets are not allowed.</p><p></p></span>
                                        </li>
                                        <li>
                                            <label>Important notices</label>
                                            <span><p>The hotel does not accept children under 18 years of age staying alone.</p><p>A city tax/mandatory bed tax/city tourism tax will be charged during the stay. These taxes are not included in the total rate for some rooms and shall be paid at the hotel front desk.</p>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="report_listing_con">
                                <div className="report_listing">
                                    <OutlinedFlagRoundedIcon />
                                    <span>Report this hotel</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* ********************************************** Loign form **************************************************** */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={this.state.open}  
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        {
                            <div className="paper">
                                <div className="close_menu">
                                <IconButton onClick={this.handleClose}><CloseRoundedIcon fontSize="small" /></IconButton>
                                </div>
                                <div className="sign_facebook">
                                   <FacebookIcon /> <span>Sign in with Facebook</span>
                                </div>
                                <div className="sign_google">
                                   <img src={gplus} className="gplus" /> <span>Sign in with Google</span>
                                </div>
                                <div className="login_area">
                                    <span><em>or, sign in with my email</em></span>
                                </div>
                                <div className="info">
                                <TextField
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                />
                                </div>
                                <div className="info">
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                />
                                </div>
                                <div className="sign-in">
                                    <Button variant="contained" color="secondary" fullWidth>
                                        Sign In
                                    </Button>
                                </div>
                                <div className="forgot">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        }
                    </Fade>
                </Modal>
          </div>
        );
    }
}