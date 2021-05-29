import React, { Component } from 'react';
import '../content.css';
import Button from '@material-ui/core/Button';
import ImageModal from './imagemodal';
export default class Content1 extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:false
        }
        this.show=this.show.bind(this);
    }

    show(){
        this.setState({flag:true});
    }

    toggleModal = () => {
        this.setState({ flag: !this.state.flag });
    }
    
    render() {
        return (
            <div className="content1">
                <div className="container">
                    <div className="img-block">
                        <div className="show_all">
                        <Button variant="contained" className="show_btn" onClick={this.show}>Show all</Button>
                        </div>
                        <div className="big-img">
                            <img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/b26de3dd3bf34aeb080849985bc3bb49.jpg" alt="big" />
                        </div>
                        <div className="small-img">
                            <div className="sub-first-img">
                                <div>
                                    <img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/811f4dfa891add2ad20c25ddf0616f32.jpg" alt="small1" />
                                </div>
                                <div>
                                    <img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/15ea929f303a020236a7a5ae06ba0563.jpg" alt="small2" />
                                </div>
                            </div>
                            <div className="sub-second-img">
                                <div>
                                    <img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/b4aa66a62574409095375046b23bca8c.jpg" alt="small3" />
                                </div>
                                <div>
                                    <img src="https://www.cuddlynest.com/images/listings/2019/07/16/20/a85bc2510e0fa3cac95da9d4e8abe3cf.jpg" alt="small4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.flag ?(
                        <ImageModal toggleModal={this.toggleModal} />
                    ):(
                        null
                    )
                }
          </div>
        );
    }
}