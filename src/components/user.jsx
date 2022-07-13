import React from "react";
import Quality from './quality'
import Bookmark from './bookmark'

const User = (userArray) => {
   
    console.log('user', userArray)
    
    for (let itemKey in userArray){
    console.log(itemKey, userArray[itemKey].name, userArray[itemKey]._id, userArray[itemKey].profession.name)
    }

    for (let itemKey in userArray) {

    return  <tbody>
                    <tr key={userArray[itemKey]._id}>
                        <td>{userArray[itemKey].name}</td>
                        <td>
                        {/* {user.qualities.map((item) => (
                            <span className={"badge m-1 bg-" + item.color} 
                                  key={item._id}>
                                        {item.name}
                            </span>
                            ))} */}
                        </td>
                        <td>{userArray[itemKey].profession.name}</td>
                        <td>{userArray[itemKey].completedMeetings}</td>
                        <td>{userArray[itemKey].rate}/5</td>
                        <td>
                            <button
                                // onClick = { () => handleDelete(user._id) }
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                            </td>
                    </tr>
        </tbody>
}
}

export default User 