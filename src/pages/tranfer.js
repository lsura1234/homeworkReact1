import React, { Component } from 'react'
import Header from '../pages/Header'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import { Redirect } from 'react-router-dom'
export default class TranferBtn extends Component { 
    state = {
        id:"",
        money:"",
        yourID:JSON.parse(localStorage.getItem('Mydata'))[0].account_id,
        status:false
    }
    sendData= async() =>{
        
        const http= await axios.post('http://localhost:3000/cheackTranfer', {
            sendID:this.state.id,
            myID:this.state.yourID,
            money:this.state.money

        })
        
        if(http.data.status==="fail") return(alert(http.data.data));
        else {
            if(window.confirm(http.data.data)){
                const http= await axios.post('http://localhost:3000/tranfer', {
                    sendID:this.state.id,
                    myID:this.state.yourID,
                    money:this.state.money

                })
                if(http.data==="sccuess"){
                    console.log("yyyy")
                    this.setState({status:true})
                }
                console.log(http.data)
            }
        }
    }
    check = () =>{
        console.log(this.state.status)
        if(this.state.status){
            localStorage.setItem('tranfer', JSON.stringify(this.state))
            return (
                <Redirect to={{
                    pathname: '/bill',
                    state: this.state.data
                  }} />
            )
        }
    }    
            
    
    
    render () {
        return (
            <div>
                <Header />
                
                <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form action="#">
                    <FormGroup>
                        <Label for="person">TRANFER TO </Label>
                         <Input required type="text" name="id" id="person"  onChange={(e) => this.setState({id:e.target.value})} placeholder="Account ID"  />
                         <Input required type="text" name="money"  onChange={(e) => this.setState({money:e.target.value})} placeholder="Money"  />
                    </FormGroup>
                    <Button color="success" onClick={(e)=>this.sendData()} >tranfer</Button>
                  </Form>
                  </Col>
                </Row>
              </Container>
              {this.check()}
            </div>
        )
    }
}