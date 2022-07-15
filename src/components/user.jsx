import React from "react";
import Quality from './quality'
import Bookmark from './bookmark'

const User = ( {user, props} ) => {

     const qualities = user.qualities
     return  <tbody>
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>

                        {qualities.map((item) =>  {
                            return <Quality quality = {item} />
                        })}
     
                        </td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                        <Bookmark state = {user.bookmark} id = {user._id} props = {props}/>

                        </td>
                        <td>
                            <button
                                className="btn btn-danger" id={user._id}
                                onClick = {() => props.onDelete(user._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
        </tbody>
}

export default User 