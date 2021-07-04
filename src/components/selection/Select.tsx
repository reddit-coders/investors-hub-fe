import Navigation from '../layout/Navigation'
import {useHistory} from 'react-router-dom'

function Select() {
   const history = useHistory()

   function handleClick(userType: string) {
      localStorage.setItem('userType', userType)
      history.push('/Information');
   }


   return (
      <div className='select__container'>
         <Navigation />

         <div className="wrapper">
            <div className="wrapper__container">
               <h2 className="select__main-heading">What are you?</h2>
               <div className='select'>
                  <div className='select__investor' onClick={() => handleClick('investor')}>
                     <h3 className="select__heading">Investor</h3>
                     <div className="select__image-container">
                        <img src={process.env.PUBLIC_URL + 'assets/investor.svg'} alt="investor"
                        className='select__image'/>
                     </div>
                     <p className="select__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda maxime eaque!</p>
                  </div>
                  <div className='select__entrepreneur' onClick={() => handleClick('entrepreneur')}>
                     <h3 className="select__heading">Entrepreneur</h3>
                     <div className="select__image-container">
                        <img src={process.env.PUBLIC_URL + 'assets/entrepreneur.svg'} alt="entrepreneur"
                        className='select__image'/>
                     </div>
                     <p className="select__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda maxime eaque!</p>
                  </div>
               </div>

            </div>
         </div>
         
      </div>
   )
}

export default Select
