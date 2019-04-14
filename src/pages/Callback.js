import React , { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Callback extends Component {
    state = {
        status: false,
    }
    componentDidMount() {
        const setData = this.props.location.state
        localStorage.setItem('Mydata', JSON.stringify(setData))
        this.setState({ status: true })
    }
    render() {
        if( this.state.status ) {
            return <Redirect to={{
                pathname: '/',
            }} />
        }
        return(<div>...</div>);
    }
}