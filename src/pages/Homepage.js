import React , { Component } from 'react'
import axios from 'axios'
import Header from '../pages/Header';

export default class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            email:( (localStorage.getItem('Mydata') ) ? JSON.parse(localStorage.getItem('Mydata'))[0].Email_Address : ""),
            id:( (localStorage.getItem('Mydata') ) ? JSON.parse(localStorage.getItem('Mydata'))[0].account_id : ""),
        }
        this.getdata()
    }
    getdata =async () =>{
        if(this.state.email){
            if(this.state.email){
                const http = await axios.post('http://localhost:3000/home', {
                id: this.state.id
            })
            this.setState({money:http.data})
            }
        }
    }
    render() {
        return (
            <div>
                
                <Header/>
                
            </div>
        )
    }
}