import React , { Component } from 'react'
import { NavItem,NavLink }from 'reactstrap';
export default class btnTranfer extends Component {
      
         show = () =>{
           if(this.props.status==="true"){
               return( <NavItem>
                <NavLink href="/tranfer" >Tranfer</NavLink>
                </NavItem>
                )
           }
         }
    render(){
        return(
           <div>
               {this.show()}
           </div>
        )
    }
        
}