import Navigation from '../layout/Navigation'

function Select() {
   return (
      <div className='select__container'>
         <Navigation />

         <div className="wrapper">
            <div className="wrapper__container">
               <h2 className="select__main-heading">What are you?</h2>
               <div className='select'>
                  <div className='select__investor'>
                     <h3 className="select__heading">Investor</h3>
                     <div className="select__image-container">
                        <img src={process.env.PUBLIC_URL + 'assets/investor.svg'} alt="investor"
                        className='select__image'/>
                     </div>
                     <p className="select__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda maxime eaque!</p>
                  </div>
                  <div className='select__entrepreneur'>
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
