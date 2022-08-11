import React, { useState, useEffect } from 'react'
import api from '../api'
import PropTypes from 'prop-types'
import QualitiesList from './qualitiesList.'
import { useHistory } from 'react-router-dom'

const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    }, [])

    const handleClick = () => {
        history.push('/users')
    }

    if (user) {
        return (
            <>
                <h2>{user.name}</h2>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h4>Количество встреч: {user.completedMeetings}</h4>
                <h4>Rate: {user.rate}</h4>
                <button
                    onClick={() => {
                        handleClick()
                    }}
                >
                    Все пользователи
                </button>
            </>
        )
    }
    return 'Loading...'
}

UserPage.propTypes = {
    userId: PropTypes.string
}
export default UserPage
