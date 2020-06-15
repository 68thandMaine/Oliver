import React from 'react';
import RadioButton from '../../components/input/RadioButton';
import LabeledInput from '../../components/input/LabeledInput';

const Inputs = () => {

	const radioOptions = [
		{
			name: "example1",
			labelText: "Example 1",
			group: "examples"
		},
		{
			name: "example2",
			labelText: "Example 2",
			group: "examples"
		},
	]

	return (
		<section>
			<article>
				<h1>Input Styles</h1>
				<hr className='mb-3'/>

				<LabeledInput
					labelText="Example Text Input"
					name="txtInputExample"
					inputType="text"
					styling="input--txt"
					/>

				<LabeledInput
					labelText="Example Number Input"
					name="numInputExample"
					inputType="number"
					styling="input--num my-2"
					placeHolderText="0.00"
				 />

				 <RadioButton
					 labelText='Example Radio Button'
					 radioOptions={radioOptions}
					 />
			</article>

			<article>
				<h1>Form Labels</h1>
				<label className='label'>Label</label>
			</article>
		</section>
	);
}

export default Inputs;