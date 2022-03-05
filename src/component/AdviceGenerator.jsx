import React, {useState, useEffect} from 'react';

const AdviceGenerator = () => {

  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setQuote(data))
  }
  
  useEffect(() => {
    getQuote()
  }, [])

	return (
    quote &&
		<div className='advice-container'>
			<h1>Advice #{quote.slip.id}</h1>
			<p className='quote'>
				"{quote.slip.advice}"
			</p>
			<img
				className='divider-mobile'
				src='./images/pattern-divider-mobile.svg'
				alt=''
			/>
			<img
				className='divider-desktop'
				src='./images/pattern-divider-desktop.svg'
				alt=''
			/>
			<div className='footer'>
				<div onClick={getQuote} className='dice-container'>
					<img className='dice' src='./images/icon-dice.svg' alt='' />
				</div>
			</div>
		</div>
	);
};

export default AdviceGenerator;
