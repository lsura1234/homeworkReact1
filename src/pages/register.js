import React , { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import Header from '../pages/Header';
import { Redirect } from 'react-router-dom'
export default class Register extends Component {
    state={
        firstName:"",
        middleName:"",
        lastName:"",
        home:"",
        mobile:"",
        email:"",
        address:"",
        name:"",
        adress:"",
        phone:"",
        job:"",
        purpose:"save",
        about:"",
        money:"0",
        status:false,

    }
    
    sendData = async() =>{
        const http = await axios.post('http://localhost:3000/personal/register', {
            firstName : this.state.firstName,
            middleName :this.state.middleName,
            lastName :this.state.lastName ,
            home :this.state.home,
            mobile : this.state.mobile,
            email : this.state.email,
            address :this.state.adress,
            name : this.state.name,
            adress : this.state.adress,
            phone : this.state.phone,
            job : this.state.job,
            type : this.state.purpose,
            purpose :this.state.purpose ,
            come : "open",
            about :this.state.about,
            balance :this.state.money,
            money: this.state.money
        })
        if(http.data.a_id){
            this.setState({status:true})
            return(alert("You account id is "+http.data.a_id))
        }
        else{
            return(alert("You can't use email"))
        }
    }
    show = () => {
        if(this.state.status) {
            return <Redirect to='/login' />
        }
        else
        return(
            <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form action="#">
                    <FormGroup>
                        <Label for="person">PERSONAL INFORMATION</Label>
                         <Input required type="text" name="firstName" id="person"  onChange={(e) => this.setState({firstName:e.target.value})} placeholder="Enter firstName"  />
                         <Input required type="text" name="middleName"  onChange={(e) => this.setState({middleName:e.target.value})} placeholder="Enter middleName"  />
                         <Input required type="text" name="lastName"  onChange={(e) => this.setState({lastName:e.target.value})} placeholder="Enter lastName"  />
                    </FormGroup>
                    <FormGroup>
                         <Label required for="connect">Contact information</Label>
                         <Input required type="text" name="home" id="connect" onChange={(e) => this.setState({home:e.target.value})} placeholder="Enter phone number"  />
                         <Input required type="text" name="mobile"  onChange={(e) => this.setState({mobile:e.target.value})} placeholder="Enter mobile phone number"  /> 
                         <Input required type="email" name="email"  onChange={(e) => this.setState({email:e.target.value})} placeholder="Enter Email"  />
                         <Input required type="textarea" name="address" onChange={(e) => this.setState({address:e.target.value})} placeholder="Enter address" />
                    </FormGroup>
                    <FormGroup>    
                         <Label required for="EMPLOYMENT INFORMATION">EMPLOYMENT INFORMATION</Label>
                         <Input required type="text" name="name" id="EMPLOYMENT INFORMATION" onChange={(e) => this.setState({name:e.target.value})} placeholder="Enter Employer name"  />
                         <Input required type="text" name="adress" id="EMPLOYMENT INFORMATION" onChange={(e) => this.setState({adress:e.target.value})} placeholder="Enter Employer address"  />
                         <Input required type="text" name="phone"  onChange={(e) => this.setState({phone:e.target.value})} placeholder="Enter phone number employer"  />
                         <Input required type="text" name="job"  onChange={(e) => this.setState({job:e.target.value})} placeholder="Enter Position "  />
                         <FormGroup>
                            <Label for="exampleSelect">Purpose to Account </Label>
                            <Input required type="select" name="purpose" id="exampleSelect" onChange={(e) => this.setState({purpose:e.target.value})}>
                                <option value="save">save</option>
                                <option value="Deposit">Deposit</option>
                            </Input>
                            <Input required type="text" name="about"  onChange={(e) => this.setState({about:e.target.value})} placeholder="How did you hear about us? "  />
                        <Input required type="number"  name="money"  onChange={(e) => this.setState({money:e.target.value})} placeholder="First money"  />
                        </FormGroup>
                        
                    <Row>
                      <Col xs="5"></Col>
                      <Button type="submit" color="success" onClick={(e)=>this.sendData()} >Register</Button>
                    </Row>
                  </FormGroup>
                  </Form>
                  </Col>
                </Row>
              </Container>
        )
    }
    render() {
        return (
            <div>
                <Header/>
             {this.show()}
            </div>
        )
    }
}