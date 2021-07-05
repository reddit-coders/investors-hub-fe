import React, { Component } from 'react';

function Navigation()
{
	return (
		<>
			<nav className='nav'>
				<div className='nav__icon-container'>
					<img
						src={process.env.PUBLIC_URL + 'assets/icon.svg'}
						alt='icon'
						className='nav__icon'
					/>
				</div>

				<div className='nav__profile-container'>
					<img src={process.env.PUBLIC_URL + 'assets/profile.svg'} alt="my profile" className='nav__profile' />
				</div>
			</nav>
		</>
	)
}

export default Navigation
