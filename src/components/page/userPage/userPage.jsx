import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import Qualities from '../../ui/qualities'
import { useHistory } from 'react-router-dom'

const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    }, [])

    const history = useHistory()
    const handleClick = () => {
        history.push('/users')
//        return <EditPage />
    }

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>Количество встреч: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClick}>Все пользователи</button>
                {/* <button onClick={handleClick}>Изменить</button> */}
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage

// import React, { useState, useEffect } from 'react'
// import api from '../api'
// import PropTypes from 'prop-types'
// import QualitiesList from './qualitiesList.'
// import { useHistory } from 'react-router-dom'

// const UserPage = ({ userId }) => {
//     const [user, setUser] = useState()
//     const history = useHistory()

//     useEffect(() => {
//         api.users.getById(userId).then((data) => setUser(data))
//     }, [])

//     const handleClick = () => {
//         history.push('/users')
//     }

//     if (user) {
//         return (
//             <>
//                 <h2>{user.name}</h2>
//                 <h2>Профессия: {user.profession.name}</h2>
//                 <QualitiesList qualities={user.qualities} />
//                 <h4>Количество встреч: {user.completedMeetings}</h4>
//                 <h4>Rate: {user.rate}</h4>
//                 <button
//                     onClick={() => {
//                         handleClick()
//                     }}
//                 >
//                     Все пользователи
//                 </button>
//             </>
//         )
//     }
//     return 'Loading...'
// }

// UserPage.propTypes = {
//     userId: PropTypes.string
// }
// export default UserPage
