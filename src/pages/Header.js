import React , { Component } from 'react'
import { Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink
        }
         from 'reactstrap';
import LogoutBtn from './btnLogout'
import LoginBtn from './btnLogin'

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          name:( (localStorage.getItem('Mydata') ) ? JSON.parse(localStorage.getItem('Mydata'))[0].First_Name : "Not login"),
          status:false,
          login:((localStorage.getItem('Mydata') ) ?"true":"false"),
        };     
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      changeStatus = () =>{
        this.setState({login:"false"})
      }
    render() {
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Homepage</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                 <LoginBtn status={this.state.login}/>
              <NavItem>
                <NavLink href="/#">Transfer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/withdraw">Withdraw</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><b>{this.state.name}</b></NavLink>
              </NavItem>
                <LogoutBtn onClick={(e) => this.changeStatus()} status={this.state.login}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        )
    }
}