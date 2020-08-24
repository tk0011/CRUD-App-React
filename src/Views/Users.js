import React , {useState} from 'react'
import UserForm from '../Components/forms/UserForm'
import User from '../Components/User'
import EditUserForm from '../Components/forms/EditUserForm'


const Users = () => {
    const usersData = []

    const intialState = {id: null, name: '' , number: '' , email : '' , address: ''}

    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(intialState)
    const [edit, setEdit] = useState(false)
   
    //ADD USER

    const addUser = (user) => {
		user.id = Math.floor(Math.random()*10000);
		(setUsers([ ...users, user]))
    }

    //UPDATE USER

    const updateUser = (id, updatedUser) => {
        setEdit(false)
        setUsers(users.map(
            user => (user.id === id ? updatedUser : user)))
    }

    const editUser = (user) => {
        setEdit(true)
        setCurrentUser({id: user.id , name: user.name , email:user.email , address: user.address, number: user.number})
    }


    //DELETE USER

    const deleteUser = (id, name) => {
        setEdit(false)
        setUsers(users.filter(user => user.id !== id))
    }
 
    
    return (
        <div className = 'container'>
            <div className = 'row'>
                <h3 className = 'grey-text center'>Users</h3>
                <div className = 'col s6'>
                    {  edit ? <EditUserForm currentUser = {currentUser} updateUser = {updateUser} />
                       : <UserForm addUser = {addUser} />
                    }
    
                </div>

                <div className = 'col s6'>
                    <User users = {users} editUser = {editUser} deleteUser = {deleteUser} / >
                </div>
            </div>
        </div>
    )
}

export default Users
