import React, {useState} from "react"
import Users from "./components/users"
import API from "./api"
import SearchStatus from "./components/searchStatus"


function App() {

    const [users, setUsers] = useState(API.users.fetchAll())
    console.log('App-users', users)


    const handleDelete = (userID) => {
        const newUsers = users.filter((u) => u.id !== userID)
        setUsers(newUsers)
    }

    const handleToggleBookMark = (id) => {

    }
    
    return (

        <div>
        {SearchStatus(users.length)}
        {Users(users)}
        </div>
    )

}


export default App