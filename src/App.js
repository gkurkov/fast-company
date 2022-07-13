import React, {useState} from "react"
//import reactDOM from "react-dom"
import Users from "./components/users"
import API from "./api"
import SearchStatus from "./components/searchStatus"
//import user from '../src/components/user'

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

// const initialState = [
//     { id: 0, value: 0, name: 'Ненужная вещь' },
//     { id: 1, value: 3, name: 'Ложка' },
//     { id: 2, value: 0, name: 'Вилка' },
//     { id: 3, value: 0, name: 'Тарелка' },
//     { id: 4, value: 0, name: 'Набор минималиста' },
// ]
// const [counters, setCounters] = useState(initialState)

// const handleDelete = (id) => {
//     const newCounters = counters.filter((c) => c.id !== id)
//     setCounters(newCounters)
// }