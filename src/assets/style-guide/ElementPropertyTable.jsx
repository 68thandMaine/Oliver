import React from 'react';

const ElementPropertyTable = () => {
	return (
		<table className='table-auto'>
		<thead>
			<tr>
				<th className='px-4 py-2'>Element Name</th>
				<th className='px-4 py-2'>HTML</th>
				<th className='px-4 py-2'>Font Family</th>
				<th className='px-4 py-2'>Styles Applied</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td className='border px-4 py-2'>Headers</td>
				<td className='border px-4 py-2'>h1 - h3</td>
				<td className='border px-4 py-2'>Poppins</td>
				<td className='border px-4 py-2'>Dark Mode Color: F0F4F8</td>
			</tr>
			<tr>
				<td className='border px-4 py-2'>Sub-headers</td>
				<td className='border px-4 py-2'>h4 - h6</td>
				<td className='border px-4 py-2'>Mukta 700</td>
				<td className='border px-4 py-2'>Dark Mode Color: E1E1E1</td>
			</tr>
			<tr>
				<td className='border px-4 py-2'>Main Elements</td>
				<td className='border px-4 py-2'>p, li, input, textarea, a, td</td>
				<td className='border px-4 py-2'>Mukta 300</td>
				<td className='border px-4 py-2'>Dark Mode Color: FFFFFF</td>
			</tr>
			<tr>
				<td className='border px-4 py-2'>Action Items</td>
				<td className='border px-4 py-2'>Button Labels</td>
				<td className='border px-4 py-2'>Mukta 600</td>
				<td className='border px-4 py-2'>Dark Mode Color: FFFFFF, uppercase</td>
			</tr>
		</tbody>
	</table>
	)
}

export default ElementPropertyTable;