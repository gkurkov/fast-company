
import React, { useState } from 'react'
import API from '../api'

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = (userID) => {
        setUsers(prevState => prevState.filter(user => user._id !== userID))
    }

    const renderPhrase = (number) => {
        const lastIndex = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return "человек тусанет"
        if ([2, 3, 4].indexOf(lastIndex) >= 0) return "человека тусанут"
        if (lastIndex === 1) return "человек тусанет"
        return "человек тусанет"
    }

    return (
        <>
        <h2>
            <span
            className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
            >
                {users.length > 0
                ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
                : "Никто с тобой не тусанет"}
            </span>
        </h2>

        {users.length > 0 && (
            <table className="table">
                <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th />
                </tr>
                </thead>
                    <tbody>
                    {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                        {user.qualities.map((item) => (
                            <span className={"badge m-1 bg-" + item.color} 
                                  key={item._id}>
                                        {item.name}
                            </span>
                            ))}
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                            <button
                                onClick = { () => handleDelete(user._id) }
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                            </td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Users

    
//     const renderUsers = () => {
        
//          return users.map((user) => (
            
//          <tr
//          className = 'table-light'>

//             <td key = {user._id}>
//                 {user.name}
//             </td>
            
//             <td>
//             {
//                 user.qualities.map((qualities) => {
//                     let color = 'badge m1 bg-' + qualities.color
                    
//                     return <> 
//                     <span 
//                     key = {qualities._id}
//                     className = {color}>
//                         {qualities.name}
//                     </span>
//                     {/* <span>
//                     {' '}
//                     </span> */}
//                     </>
//                 })
//             }
//             </td>
//             <td>{user.profession.name}</td>
//             <td>{user.completedMeetings}</td>
//             <td>{user.rate}/5
//             </td>
            
//             <td>
//             <button 
//                 type = 'button' 
//                 className = 'btn btn-danger'
//                 key = {user._id}
//                 onClick = { () => {handleDelete(user._id)}}
//                 >
//                 Delete
//                 </button>
//             </td>
//         </tr>

//         ))

//     }

//     return (
//     <>  
//         <div>
//         {renderPhrase()}
//         </div>
//         <table className='table'>
//         <thead>
//             <tr>
//             <th className='table-light'>Имя</th>
//             <th className='table-light'>Качества</th>
//             <th className='table-light'>Профеcсия</th>
//             <th className='table-light'>Встретился, раз</th>
//             <th className='table-light'>Оценка</th>
//             <th className='table-light'></th>
//             </tr>
//         </thead>
//         <tbody>
//             {renderUsers()}
//         </tbody>
//         </table>
//     </>
//     )
// }

