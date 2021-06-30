import { useHistory } from 'react-router-dom'

function ProceedButton({ onClick }) {
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
