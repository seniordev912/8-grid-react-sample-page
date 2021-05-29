import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export class CounterButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            qty:1
        }
    }

    decreaseQuantity(){
        if(parseInt(this.state.qty)>1){
            let num=parseInt(this.state.qty) -1;
            this.setState({qty:num});
        }
    }

    increaseQuantity(){
        this.setState({qty:parseInt(this.state.qty)+1})
    }
    render() {
        return (
                <div className="qty_edit">
                    <div>
                        <IconButton onClick={()=>this.decreaseQuantity()} style={{ padding: "5px", textAlign:'left'}}>
                              <RemoveIcon style={{fontSize: '15px'}}/>
                        </IconButton>
                    </div>
                    <div>
                        <span>{this.state.qty} Guest</span>
                    </div>
                    <div>
                        <IconButton onClick={()=>this.increaseQuantity()} style={{ padding: "5px", textAlign:'right'}}>
                            <AddIcon style={{fontSize: '15px'}}/>
                        </IconButton>
                    </div>
                </div>
        )
    }
}

export default CounterButton
