import Navigation from '../layout/Navigation'

function Information() {
	return (
		<div className='info__container'>
			<Navigation />

			<div className='information'>
				<div>
					<div className='information__profile'>
						<img
							src={process.env.PUBLIC_URL + '/assets/profile.svg'}
							alt='Profile'
							className='information__image'
						/>
						<div className='information__headings'>
							<h3 className='information__name'>Timothy James</h3>
							<h5 className='information__type'>Investor</h5>
						</div>
					</div>

					<div className='information__input-container'>
						<div className='information__form'>
							<label htmlFor='name' className='information__label'>Full Name</label>
							<input
								type='text'
								name='name'
								className='information__input'
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='location' className='information__label'>Location</label>
							<input
								type='text'
								name='location'
								className='information__input'
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='email' className='information__label'>Email</label>
							<input
								type='email'
								name='email'
								className='information__input'
							/>
						</div>
						<div className='information__form'>
							<label htmlFor='bio' className='information__label'>Bio</label>
							<textarea
								name='bio'
								id='information__text-area'
								className='information__input'
								cols='30'
								rows='10'
							></textarea>
						</div>

                  <div>
                     <button type="submit" className='form__button'>Submit</button>
                  </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Information
