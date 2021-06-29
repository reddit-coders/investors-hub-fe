import { useState } from 'react'
import ProceedButton from './ProceedButton'

export function EnterName(props) {
	const [name, setName] = useState("");

	function saveToLocalStorage(event) {
		setName(event.target.value);
		 window.localStorage.setItem('userName', event.target.value)
	}

	return (
		<>
			<div className='form__name'>
            <input type='text' name='name' id='name' 
						value={name}
          	onChange={event => saveToLocalStorage(event)}
						/>
            
            <ProceedButton/>
			</div>
		</>
	)
}

EnterName.defaultProps = {
	value: ''
}

export default EnterName
