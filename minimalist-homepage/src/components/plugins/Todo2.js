import React, { useState, useEffect, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { userInfo } from 'os'
import auxiosWithAuth, { axiosWithAuth } from '../../axiosWithAuth';

const App = () => {
	const usersData = [
		{ id: 1, note: 'Tania' },
		{ id: 2, note: 'Craig'  },
		{ id: 3, note: 'Ben'  },
	]

	const initialFormState = { id: null, note: '' }

	// Setting state
  //const [ users, setUsers ] = useState([])
  const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  useEffect(()=>{
    axiosWithAuth()
      .get('/api/notes/user/1')
      .then(res=>{
        console.log('res---', res.data)
        setUsers(res.data)
      })
  }, []);


	// CRUD operations
	const addUser = user => {
    //user.id = users.length + 1
    axiosWithAuth()
    .post('/api/notes/', user)
    .then(res=>{
      console.log('adding note', res)
    })

		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
    setEditing(false)
    
    axiosWithAuth()
    .delete(`/api/notes/${id}`)
    .then(res=>{
      console.log('del note---', res)
    })

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
    axiosWithAuth()
    .put(`/api/notes/${id}`, {user_id: 1, note:updatedUser.note})
    .then(res=>{
      console.log('updateUser note---', res)
    })
    
    setEditing(false)
  
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
    // axiosWithAuth()
    // .put(`/api/notes/${user.id}`, {user_id: 1, note:user.note})
    // .then(res=>{
    //   console.log('editRow note---', res)
    // })
    
    setEditing(true)
    
		setCurrentUser({ id: user.id, note: user.note, })
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App