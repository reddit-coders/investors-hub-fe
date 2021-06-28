import React from 'react'
import Navigation from '../layout/Navigation'
import EnterName from '../layout/EnterName'
import Blobs from '../layout/Blobs'

function Welcome() {
	return (
		<div className='welcome'>
			<Blobs />
			<Navigation />

			<div className='container'>
				<div className='information__container'>
					<h2 className='enter-name'>Enter your name</h2>
					
               <EnterName />
				</div>
			</div>
		</div>
	)
}

export default Welcome
