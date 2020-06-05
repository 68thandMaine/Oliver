import React from 'react';
import Button from '../../components/button/Button';
import IconButton from '../../components/button/IconButton';

const Buttons = () => {
	return (
		<article>
				<h1>Button Styles</h1>
				<hr/>
				<br />
				<Button
					text='Base Button'
					/>
				<IconButton 
					iconName='cogs'
					name="Icon Button"
					/>
		</article>
	)
}

export default Buttons;