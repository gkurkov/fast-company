import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Users from './layouts/users'
import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import Login from './layouts/login'
import { ProfessionProvider } from './hooks/useProfession'
import { QualitiesProvider } from './hooks/useQualities'
import AuthProvider from './hooks/useAuth'
// import Edit from './layouts/edit'
// import UsersLayout from './components/usersLayout'

function App() {
    return (
        <div>
            <AuthProvider>
            <NavBar />
            {/* <Users /> */}
            <QualitiesProvider>
            <ProfessionProvider>
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
            </ProfessionProvider>
            </QualitiesProvider>
            </AuthProvider>
            <ToastContainer/>
        </div>
    )
}

export default App
