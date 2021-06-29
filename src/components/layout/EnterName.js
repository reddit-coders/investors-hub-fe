import { useState } from 'react'
import ProceedButton from './ProceedButton'
import { useHistory } from 'react-router-dom'

export function EnterName(props) {
	const [name, setName] = useState('')
	const history = useHistory()

	function saveToLocalStorage(event) {
		setName(event.target.value)
		window.localStorage.setItem('userName', event.target.value)
	}

	function onEnterKeyPress(event) {
		const listener = event => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				history.push('/Select')
			}
		}

		document.addEventListener('keydown', listener)
	}

	return (
		<>
			<div className='form__name'>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={event => saveToLocalStorage(event)}
               onKeyUp={event => onEnterKeyPress(event)}
				/>

				<ProceedButton />
			</div>
		</>
	)
}

EnterName.defaultProps = {
	value: '',
}

export default EnterName
