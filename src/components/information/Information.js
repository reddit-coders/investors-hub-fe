import Navigation from '../layout/Navigation'
import { useState } from 'react'

function Information() {
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [email, setEmail] = useState('')
	const [bio, setBio] = useState('')

	function saveNameToLocalStorage(event) {
		setName(event.target.value)
		window.localStorage.setItem('fullName', event.target.value)
	}

	function saveLocationToLocalStorage(event) {
		setLocation(event.target.value)
		window.localStorage.setItem('location', event.target.value)
	}

	function saveEmailToLocalStorage(event) {
		setEmail(event.target.value)
		window.localStorage.setItem('email', event.target.value)
	}

	function saveBioToLocalStorage(event) {
		setBio(event.target.value)
		window.localStorage.setItem('bio', event.target.value)
	}

	return (
		<div className='info__container'>
			<Navigation />

			<div className='information'>
				<div className='information__container'>
					<div className='information__profile'>
						{/* <img
							src={process.env.PUBLIC_URL + '/assets/profile.svg'}
							alt='Profile'
							className='information__image'
						/> */}
						<div className='information__headings'>
							<h3 className='information__name'>Timothy James</h3>
							<h5 className='information__type'>Investor</h5>
						</div>
					</div>

					<div className='information__input-container'>
						<div className='information__form'>
							<label htmlFor='name' className='information__label'>
								Full Name
							</label>
							<input
								type='text'
								name='name'
								className='information__input'
                        onChange={event => saveNameToLocalStorage(event)}
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='location' className='information__label'>
								Location
							</label>
							<input
								type='text'
								name='location'
								className='information__input'
                        onChange={event => saveLocationToLocalStorage(event)}
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='email' className='information__label'>
								Email
							</label>
							<input
								type='email'
								name='email'
								className='information__input'
                        onChange={event => saveEmailToLocalStorage(event)}
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='bio' className='information__label'>
								Bio
							</label>
							<textarea
								name='bio'
								id='information__text-area'
								className='information__input'
								cols='30'
								rows='5'
                        onChange={event => saveBioToLocalStorage(event)}
							></textarea>
						</div>

						<div className='information__form'>
							<button type='submit' className='information__button'>
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className='information__illustration-container'>
					<img
						src={process.env.PUBLIC_URL + '/assets/form.svg'}
						alt='form.svg'
						className='information__illustration'
					/>
				</div>
			</div>
		</div>
	)
}

export default Information
