import { useState } from 'react'
import { IconButton } from '@mui/material'
import MyIcon from '../MyIcon'

const VisibilityToggle = ({ initialState, onToggle }) => {
	const [visibility, setVisibility] = useState(initialState)

	let visibilityIcon = null

	if (visibility) {
		visibilityIcon = <MyIcon name='visibility' />
	} else {
		visibilityIcon = (
			<MyIcon
				name='visibilityOff'
				color='disabled'
			/>
		)
	}

	const handleToggle = () => {
		setVisibility(!visibility)
		onToggle()
	}

	return <IconButton onClick={handleToggle}>{visibilityIcon}</IconButton>
}

export default VisibilityToggle
