import React from 'react';
import LabeledInput from '../../components/input/LabeledInput';

const Inputs = () => {

	return (
		<section>
			<article>
				<h1>Input Styles</h1>
				<hr className='mb-3'/>
				<input className='input input--txt' placeholder='Normal Input'></input>

				<input className='input input--num my-2' type='number' placeholder='0.00'></input>
			</article>

			<article>
				<h1>Form Labels</h1>
				<label className='label'>Label</label>
			</article>

			<article>
				<h1>Labled Inputs</h1>
				<hr className='mb-3' />
				<LabeledInput
				
				/>
			</article>
		</section>
	);
}

export default Inputs;