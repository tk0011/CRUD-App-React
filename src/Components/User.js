import React from 'react'

const User = (props) => {
   
    return (
        <div className = 'user-list' style = {{textAlign: 'center'}}>
            {props.users.length > 0 ? (
                props.users.map(user => 
                    <div>
                        <table>    
                                <tr>
                                   <td> Name </td>
                                   <td>{user.name}</td>
                                </tr>
                                <tr>
                                   <td> Contact </td>
                                   <td>{user.number}</td>
                                </tr>
                                <tr>
                                   <td> Email </td>
                                   <td>{user.email}</td>
                                </tr>
                                <tr>
                                   <td> Address </td>
                                   <td>{user.address}</td>
                                </tr>
                               
                        </table>

                        <div style = {{display : 'flex'}}>
                            <input className = 'btn' type="submit" value = 'Edit' onClick = {() => props.editUser(user)} />
                            <input className = 'btn red lighten-2' type="submit" value = 'Delete'
                             onClick = {() => props.deleteUser(user.id)}
                            />
                        </div>
                        <br/>
                        <hr/>
                    </div>
                )
            )  :  
            ( <h4 className = 'grey-text' style = {{marginTop : "40px" , textAlign: 'center'}}>No user to show. 
                <br/>
                Add new User.</h4>)
            }
        </div>
    )
}

export default User
