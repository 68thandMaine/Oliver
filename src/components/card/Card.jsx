import React from 'react';
import PropTypes from 'prop-types';


function Card( props ) {

    

    return (
    <section className='grid grid-cols-3 border border-red-300 w-2/3'>
      <section className='graph-summary col-span-1 gap-2 flex flex-col items-center mt-12'>
        <div className='w-64'>
						<h3>Credit Cards</h3>
						<ul>
								<li>Discover.....current balance....date</li>
								<li>Citi Card.....current balance....date</li>
						</ul>
				</div>
        <div className='w-64'>
					<h3>Loans</h3>
					<ul>
							<li>UAS.....current balance....date</li>
							<li>Navient.....current balance....date</li>
							<li>Climb.....current balance....date</li>
					</ul>
				</div>
      </section>
      <section className='graphs col-span-2'>
				{props.children}
      </section>
    </section>
    )
};

Card.propTypes = {
    cardTitle: PropTypes.string,
};

export default Card;