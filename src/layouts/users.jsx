import React from 'react'
import { useParams } from 'react-router-dom'
import UsersListPage from '../components/page/usersListPage'
import UserPage from '../components/page/userPage'
import EditUserPage from '../components/page/editUserPage'
import UserProvider from '../hooks/useUsers'

const Users = () => {
    const params = useParams()
    const { userId, edit } = params
    return (
        <>
            <UserProvider>
                <div className="container">
                    <div className="row gutters-sm">
                        {userId ? (
                            edit ? (
                                <EditUserPage />
                            ) : (
                                <UserPage userId={userId} />
                            )
                        ) : (
                            <UsersListPage />
                        )}
                    </div>
                </div>
            </UserProvider>
        </>
    )
}

export default Users
