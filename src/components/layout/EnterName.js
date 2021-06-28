import React from 'react'
import ProceedButton from './ProceedButton'

function EnterName() {
	return (
		<>
			<form className='form__name'>
            <input type='text' name='name' id='name' />
            
            <ProceedButton />
			</form>
		</>
	)
}

export default EnterName
