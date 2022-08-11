import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './components/users'
import NavBar from './components/navBar'
import MainPage from './components/mainpage'
import LoginPage from './components/loginPage'
import UsersLayout from './components/usersLayout'

function App() {
    return (
        <div>
            <NavBar />
            {/* <Users /> */}
            <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/users/:userId" component={UsersLayout} />
            <Route path="/users" component={Users} />
            </Switch>
        </div>
    )
}

export default App
