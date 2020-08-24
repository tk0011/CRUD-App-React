import React , {useState} from 'react'

const EditUserForm = (props) => {
    
    const[state, setState] = useState(props.currentUser)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateUser(state.id, state)
        alert(`You have made changes in ${state.name}'s profile`)
    }


    return (
        <div className = 'user-form'>
           
                    <form onSubmit = {handleSubmit} className = 'input-filed'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name= 'name' value={state.name} id="name" required  onChange = {handleChange}/>
        
                        <label htmlFor="number">Contact No.</label>
                        <input type="number" name='number' value={state.number} id="number" required onChange = {handleChange}/>
        
                        <label htmlFor="email">Email</label>
                        <input type="email" name= 'email' value={state.email} id="email" required onChange = {handleChange}/>
        
                        <label htmlFor="address">Address</label>
                        <input type="text" name='address' value={state.address} id="address"  required onChange = {handleChange}/>

                        <input className = 'btn' type="submit" value= 'Update User'/>
                    </form>
          
        </div>
    )
}

export default EditUserForm
