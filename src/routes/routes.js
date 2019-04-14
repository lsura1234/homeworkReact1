import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Withdraw from '../pages/Withdraw'
import Login from '../pages/login'
import Otp from '../pages/otp'
import Callback from '../pages/Callback'

const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/withdraw" component={Withdraw} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login/otp" component={Otp} />
                <Route exact path="/callback" component={Callback} />
            </Router>
        </div>
    )
}

export default Routes