import { useHistory } from 'react-router-dom'
import { React } from 'react'

function ProceedButton({ }) {
	const history = useHistory()

	const handleClick = () => {
		history.push('/Select')
	}
	return (
		<>
			<button className='form__button' onClick={() => handleClick()}>
				Proceed
			</button>
		</>
	)
}

export default ProceedButton
