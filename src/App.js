import React, {useState} from "react"
import Users from "./components/users"
import API from "./api"
import SearchStatus from "./components/searchStatus"


function App() {

    const [users, setUsers] = useState(API.users.fetchAll())
    console.log('App-users', users)


    const handleDelete = (userID) => {

        console.log('userID', userID)
        const newUsers = users.filter((u) => u._id !== userID)
        console.log('newUsers', newUsers)
        setUsers(newUsers)
    }

    const handleToggleBookMark = (id) => {
    console.log('id-toggle', id)
    }
    
    return (

        <div>
        <SearchStatus count={users.length}/>
        <Users users={users} onDelete = {handleDelete} onToggleBookMark = {handleToggleBookMark} />
        </div>
    )

}


export default App