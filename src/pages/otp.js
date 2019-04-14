import React, { Component } from 'react';
import axios from 'axios'
import Header from '../pages/Header';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import { Redirect } from 'react-router-dom'
export default class Otp extends Component {
    state = {
      user:"",
      email:"",
      status:false,
      data: ""
    }
      handleLogin = async () => {
        const http= await axios.post('http://localhost:3000/login/otp', {
          email: this.state.email,
          otp:this.state.user
        })
        this.setState({ data: http.data })
        if (http.data) this.setState({status:true}) 
      }
      show=()=>{
        
        if (this.state.status) {
          return (
            <Redirect to={{
              pathname: '/callback',
              state: this.state.data
            }} />
          )
        }
       
      }
    render() {
        return (
            <div>
              <Header/>
              <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form>
                    <FormGroup>
                         <Label for="exampleEmail">Email</Label>
                         <Input type="email" name="mail" id="exampleEmail" onChange={(e) => this.setState({email:e.target.value})} placeholder="Enter mail"  />
                         <Label for="exampleEmail2">OTP</Label>
                          <Input type="password" name="test" id="exampleEmail2" onChange={(e) => this.setState({user:e.target.value})} placeholder="Enter OTP"  />
                    <Row>
                      <Col xs="5"></Col>
                      <Button color="success" onClick={(e)=>this.handleLogin()}>Login</Button>
                    </Row>
                  </FormGroup>
                  </Form>
                  </Col>
                </Row>
              </Container>
              {this.show()}
            </div>
        );
    }
}


