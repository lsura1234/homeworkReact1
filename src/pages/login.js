import React, { Component } from 'react';
import axios from 'axios'
import Header from '../pages/Header';
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    state = {
      user:"",
    }
      handleLogin = async () => {
        const http = await axios.post('http://localhost:3000/login', {
          username: this.state.user
        })
        if (http.data) {
          //console.log("asdasdasd");
          return (
            <div>
              <Redirect to='/login/otp' />
            </div>
          )
        }
       // console.log(http.data);
        
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
                    <Input type="email" name="email" id="exampleEmail" onChange={(e) => this.setState({user:e.target.value})} placeholder="Enter Your Email"  />
                    <Row>
                      <Col xs="5"></Col>
                      <Button color="success" onClick={(e)=>this.handleLogin()}>require OTP</Button>
                    </Row>
                  </FormGroup>
                  </Form>
                  </Col>
                </Row>
              </Container>
            </div>
        );
    }
}


