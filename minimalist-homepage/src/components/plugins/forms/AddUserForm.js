import React, { useState } from 'react'

const AddUserForm = props => {
	const [ user, setUser ] = useState('')

	const handleInputChange = e => {
		setUser(e.target.value);
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user) return

				props.addUser({note: user, user_id: 1}) //
				setUser('')
			}}
		>
			<label>Name</label>
			<input type="text" name="note" value={user} onChange={handleInputChange} />

			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm