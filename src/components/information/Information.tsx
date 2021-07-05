import Navigation from '../layout/Navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserInputTypes, setPlaceholderOnMultiline, userTypeGetter, userNameGetter } from './Information.utils'
import React, { Component } from 'react';

function Information()
{
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [email, setEmail] = useState('');
	const [bio, setBio] = useState('');
	const [userType, setUserType] = useState(userTypeGetter);
	const [userName, setUserName] = useState(userNameGetter);

	const rows = 5;
	const cols = 30;

	function saveElementToLocalStorage(event: any, element: UserInputTypes): void
	{
		window.localStorage.setItem(element, event.target.value);
		switch (element)
		{
			case UserInputTypes.BIO:
				setBio(event.target.value);
				break;
			case UserInputTypes.EMAIL:
				setEmail(event.target.value);
				break;
			case UserInputTypes.LOCATION:
				setLocation(event.target.value);
				break;
			case UserInputTypes.FULL_NAME:
				setName(event.target.value);
				break;
		}
	}

	useEffect(() =>
	{
		setPlaceholderOnMultiline();
	});

	return (
		<div className="info__container">
			<Navigation />

			<div className="informationn">
				<div className="informationn__container">
					<div className="informationn__profile">
						<img
							src={process.env.PUBLIC_URL + '/assets/profile.svg'}
							alt="Profile"
							className="informationn__image"
						/>
						<div className="informationn__headings">
							<h3 className="informationn__name">{userName}</h3>
							<h5 className="informationn__type">{userType}</h5>
						</div>
					</div>

					<div className="informationn__input-container">
						<div className="informationn__form">
							<label htmlFor="name" className="informationn__label">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								className="informationn__input"
								placeholder="Your real full name"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.FULL_NAME)}
							/>
						</div>
						<div className="informationn__form">
							<label htmlFor="location" className="informationn__label">
								Location
							</label>
							<input
								type="text"
								name="location"
								className="informationn__input"
								placeholder="City and country"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.LOCATION)}
							/>
						</div>
						<div className="informationn__form">
							<label htmlFor="email" className="informationn__label">
								Email
							</label>
							<input
								type="email"
								name="email"
								className="informationn__input"
								placeholder="Your email address"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.EMAIL)}
							/>
						</div>
						<div className="informationn__form">
							<label htmlFor="bio" className="informationn__label">
								Bio
							</label>
							<textarea
								name="bio"
								id="informationn__text-area"
								className="informationn__input"
								rows={rows}
								cols={cols}
								placeholder="Type some general information about yourself. \nHobbies, interests and little details about your cat are all welcome!"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.BIO)}
							></textarea>
						</div>

						<div className="informationn__form">
							<button type="submit" className="informationn__button">
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className="informationn__illustration-container">
					<img
						src={process.env.PUBLIC_URL + '/assets/form.svg'}
						alt="form.svg"
						className="informationn__illustration"
					/>
				</div>
			</div>
		</div>
	);
}

export default Information;
