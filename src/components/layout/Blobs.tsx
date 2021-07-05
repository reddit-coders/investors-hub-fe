import React, { Component } from 'react';

function Blobs(): any
{
	return (
		<>
			<div className='blob blob--1'>
				<img
					src={process.env.PUBLIC_URL + 'assets/blob-1.svg'}
					alt='blob'
					className='blob--one'
				/>
			</div>
			<div className='blob blob--2'>
				<img
					src={process.env.PUBLIC_URL + 'assets/blob-2.svg'}
					alt='blob'
					className='blob--two'
				/>
			</div>
		</>
	)
}

export default Blobs
