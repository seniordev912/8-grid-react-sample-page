import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
export default class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo-serch">
                        <div className="logo-block">
                            <a href="https://www.cuddlynest.com/"> 
                                <img id="logo-image1" src="https://www.cuddlynest.com/images/logo/cn_logo_hpv2_clor_en.png?v=4" alt="Logo" />
                            </a>
                        </div>
                        <div className="search-block">
                            <TextField
                                className="search"
                                size="small"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><SearchIcon id="uparrow" style={{cursor:`pointer`,fontSize:24}} /></InputAdornment>,
                                }}
                                placeholder="Search your destination here..."
                            />
                        </div>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li className="dropdown"><a href="#" className="Eur"><span>EUR</span> &nbsp;<ExpandMoreRoundedIcon /></a>
                                <ul className="menu_list">
                                    <li>Euro</li>
                                    <li>US Dollar</li>
                                    <li>Pound sterling</li>
                                    <li>Chinese yuan</li>
                                    
                                </ul>
                            </li>
                            <li><a href="3">Log in</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">List your property</a></li>
                        </ul>
                    </div>
                </div>
          </div>
        );
    }
}