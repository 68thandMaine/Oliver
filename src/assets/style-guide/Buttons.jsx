import React from 'react';
import Button from '../../components/button/Button';
import IconButton from '../../components/button/IconButton';

const Buttons = () => {
	return (
		<article>
				<h1>Button Styles</h1>
				<hr/>
				<br />
				<section className='flex flex-row justify-between'>
					<Button
						text='Base Button'
						/>
					<IconButton
						name='Numorphoic Graph Control Button'
						iconName='cogs'
						styling='btn__graphControl'
					/>
					<IconButton
						name='Add'
						iconName='plus-circle'
						styling='btn__add'
					/>

				</section>
		</article>
	)
} 

export default Buttons;