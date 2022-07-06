
import React, { useState } from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userID) => {
        setUsers(prevState => prevState.filter(user => user._id != userID))
    }

    const renderPhrase = (number) => {
       number = users.length
       let lastIndex = number.toString().split('').pop()

       if (number === 0) return <span 
       className='btn btn-danger position-relative'>
       Никто не тусанет с тобой сегодня
       </span>
       if (number === 1 || (number >= 5 && number <= 22)) return <span 
       className='btn btn-primary position-relative'>
       {number} человек тусанет с тобой сегодня
       </span>
       if (number >=2 && number <=4) return <span 
       className='btn btn-primary position-relative'>
       {number} человека тусанет с тобой сегодня
       </span>
       if (number >= 23 && (lastIndex >=2 && lastIndex <=4))
       return <span 
       className='btn btn-primary position-relative'>
       {number} человека тусанет с тобой сегодня
       </span>
       return <span 
       className='btn btn-primary position-relative'>
       {number} человек тусанет с тобой сегодня
       </span>

    }
    
    const renderUsers = () => {
        
         return users.map((user) => (
            
         <tr
         className = 'table-light'>

            <td key = {user._id}>
                {user.name}
            </td>
            
            <td>
            {
                user.qualities.map((qualities) => {
                    let color = 'badge bg-' + qualities.color
                    
                    return <> 
                    <span 
                    key = {qualities._id}
                    className = {color}>
                        {qualities.name}
                    </span>
                    <span>
                    {' '}
                    </span>
                    </>
                })
            }
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5
            </td>
            
            <td>
            <button 
                type = 'button' 
                className = 'btn btn-danger'
                key = {user._id}
                onClick = { () => {handleDelete(user._id)}}
                >
                Delete
                </button>
            </td>
        </tr>

        ))

    }

    return (
    <>  
        <div>
        {renderPhrase()}
        </div>
        <table className='table'>
        <thead>
            <tr>
            <th className='table-light'>Имя</th>
            <th className='table-light'>Качества</th>
            <th className='table-light'>Профеcсия</th>
            <th className='table-light'>Встретился, раз</th>
            <th className='table-light'>Оценка</th>
            <th className='table-light'></th>
            </tr>
        </thead>
        <tbody>
            {renderUsers()}
        </tbody>
        </table>
    </>
    )
}

export default Users