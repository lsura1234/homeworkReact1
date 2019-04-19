import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Withdraw from '../pages/Withdraw'
import Login from '../pages/login'
import Otp from '../pages/otp'
import Callback from '../pages/Callback'
import Register from '../pages/register'
import Tranfer from '../pages/tranfer'
import Bill from '../pages/bill'

const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/withdraw" component={Withdraw} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login/otp" component={Otp} />
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/tranfer" component={Tranfer} />
                <Route exact path="/bill" component={Bill} />
            </Router>
        </div>
    )
}

export default Routes