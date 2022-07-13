import React from 'react'
import User from './user'

const Users = ( { users, ...rest} ) => { // почему надо так писать?

let userArray = { ...rest} // почему надо так писать?

console.log('userArray', userArray)
console.log(Object.keys(userArray).length)

if (Object.keys(userArray).length > 0)

return (
        <table className='table'>
        <thead>
            <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профеcсия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'></th>
            </tr>
        </thead>

        {User(userArray)}

        </table>
    )
}

export default Users