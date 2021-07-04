import Navigation from '../layout/Navigation';
import { ChangeEvent, useRef, useState } from 'react';
import { useEffect } from 'react';

function Information()
{
	const userTypeGetter = localStorage.getItem('userType') || '';
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [email, setEmail] = useState('');
	const [bio, setBio] = useState('');
	const [userType, setUserType] = useState(userTypeGetter);

	const rows = 5;
	const cols = 30;

	enum UserInputTypes
	{
		BIO = 'bio',
		EMAIL = 'email',
		LOCATION = 'location',
		FULL_NAME = 'fullName',
	}

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

	function setPlaceholderOnMultiline()
	{
		var textAreas = document.getElementsByTagName('textarea');
		Array.prototype.forEach.call(textAreas, function (elem)
		{
			elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
		});
	}

	useEffect(() =>
	{
		setPlaceholderOnMultiline();
	});

	return (
		<div className="info__container">
			<Navigation />

			<div className="information">
				<div className="information__container">
					<div className="information__profile">
						<img
							src={process.env.PUBLIC_URL + '/assets/profile.svg'}
							alt="Profile"
							className="information__image"
						/>
						<div className="information__headings">
							<h3 className="information__name">Timothy James</h3>
							<h5 className="information__type">{userType}</h5>
						</div>
					</div>

					<div className="information__input-container">
						<div className="information__form">
							<label htmlFor="name" className="information__label">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								className="information__input"
								placeholder="Your real full name"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.FULL_NAME)}
							/>
						</div>
						<div className="information__form">
							<label htmlFor="location" className="information__label">
								Location
							</label>
							<input
								type="text"
								name="location"
								className="information__input"
								placeholder="City and country"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.LOCATION)}
							/>
						</div>
						<div className="information__form">
							<label htmlFor="email" className="information__label">
								Email
							</label>
							<input
								type="email"
								name="email"
								className="information__input"
								placeholder="Your email address"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.EMAIL)}
							/>
						</div>
						<div className="information__form">
							<label htmlFor="bio" className="information__label">
								Bio
							</label>
							<textarea
								name="bio"
								id="information__text-area"
								className="information__input"
								rows={rows}
								cols={cols}
								placeholder="Type some general information about yourself. \nHobbies, interests and little details about your cat are all welcome!"
								onChange={(event) => saveElementToLocalStorage(event, UserInputTypes.BIO)}
							></textarea>
						</div>

						<div className="information__form">
							<button type="submit" className="information__button">
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className="information__illustration-container">
					<img
						src={process.env.PUBLIC_URL + '/assets/form.svg'}
						alt="form.svg"
						className="information__illustration"
					/>
				</div>
			</div>
		</div>
	);
}

export default Information;
