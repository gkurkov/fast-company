import React, {useState} from "react"
import Users from "./components/users"
import API from "./api"
import SearchStatus from "./components/searchStatus"


function App() {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = (userID) => {
    const newUsers = users.filter((u) => u._id !== userID)
    setUsers(newUsers)
    }

    const handleToggleBookMark = (id) => {
    const bookMarkToChange = users.findIndex((user => user._id === id))
    const newUsers = [...users]

    newUsers[bookMarkToChange].bookmark === true 
    ? 
    newUsers[bookMarkToChange].bookmark = false 
    : 
    newUsers[bookMarkToChange].bookmark = true
    
    setUsers(newUsers)
    }
    
    return (
    <div>
    <SearchStatus count={users.length}/>
    <Users users={users} onDelete = {handleDelete} onToggleBookMark = {handleToggleBookMark} />
    </div>
    )

}

export default App