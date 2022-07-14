import React from "react";
import Quality from './quality'
import Bookmark from './bookmark'

const User = ({user, ...rest}) => {

    // const handleDelete = (userID) => {
    //     const newUsers = users.filter((u) => u.id !== userID)
    //     setUsers(newUsers)
    // }
        const qualities = user.qualities
    console.log('user-item', user)
    console.log('QUALITIES', qualities)
    console.log('props', rest)

    return  <tbody>
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>

                        {qualities.map((item) =>  {

                            console.log('item.quality', item)
                            
                            return <Quality quality = {item} />
                        })}
     
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                        <Bookmark state = {user.bookmark}/>

                        </td>
                        <td>
                            <button
                                className="btn btn-danger" id={user._id}
                                onClick = {() => rest.onDelete.onDelete(user._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
        </tbody>
}

export default User 