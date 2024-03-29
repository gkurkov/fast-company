import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Users from './layouts/users'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import Login from './layouts/login'
// import Edit from './layouts/edit'
// import UsersLayout from './components/usersLayout'

function App() {
    return (
        <div>
            <NavBar />
            {/* <Users /> */}
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                {/* <Route
                    path="/users/:userId/edit"
                    render={(user) => <Edit user={user} />}
                /> */}
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
