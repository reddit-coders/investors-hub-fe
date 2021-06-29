import { useEffect, useRef } from 'react'
import Navigation from '../layout/Navigation'
import EnterName from '../layout/EnterName'
import Blobs from '../layout/Blobs'

const Welcome = () => {

	const containerRef = useRef(null);
	const inputNameContainerRef = useRef(null);

	useEffect(() => {
		inputNameContainerRef.current.style.opacity = '0';
		containerRef.current.style.opacity = '0';
	 	unFade(containerRef.current);
		setTimeout(() => {fade(containerRef.current)}, 1800);
		setTimeout(() => {unFade(inputNameContainerRef.current)}, 3000);
	})
	return (
		<div className='welcome'>
			<Blobs />
			<Navigation />

			<div className='container' ref={containerRef}>
				<div className='information__container'>
					<h2 className='enter-name'>Welcome to Investors Hub!</h2>
				</div>
			</div>

			<div className='container' ref={inputNameContainerRef}>
				<div className='information__container'>
					<h2 className='enter-name'>Enter your name</h2>
            <EnterName />
				</div>
			</div>

		</div>
	)

	function fade(element) {
    var initialOpacity = 1; 
    var timer = setInterval(function () {
        if (initialOpacity <= 0.05){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = initialOpacity;
        element.style.filter = 'alpha(opacity=' + initialOpacity * 100 + ")";
        initialOpacity -= initialOpacity * 0.09;
    }, 50);
	}

	function unFade(element) {
		var initialOpacity = 0.1;  
		var timer = setInterval(function () {
				if (initialOpacity >= 1){
						clearInterval(timer);
				}
				element.style.opacity = initialOpacity;
				element.style.filter = 'alpha(opacity=' + initialOpacity * 100 + ")";
				initialOpacity += initialOpacity * 0.09;
		}, 50);
	}

}

export default Welcome
