import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheet.scss';

function StyleGuide(props) {

    return (
        <section>
					<section>
						<h1>Typography</h1>
						<hr/>  
						<section className='grid grid-cols-2 gap-3'>
							<section>
								<h1>h1 Header</h1>
								<h2>h2 Header</h2>										
								<h3>h3 Header</h3>
								<h4>h4 Sub-header</h4>
								<h5>h5 Sub-header</h5>
								<h6>h6 Sub-header</h6>
								<p>Body Regular</p>
								<li>li</li>
								<label>label</label>
								<button>button</button>
							</section>
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


						</section>
					</section>


						<h1>Icons</h1>
						<hr/>  
										
								<h3>Nav Bar Icons</h3>
								<ul>
										<li>Logo Icon: <span><FontAwesomeIcon icon={["fab", "first-order"]}/></span></li>
										<li>Overview Icon: <span><FontAwesomeIcon icon='warehouse'/></span></li>
										<li>Accounts Icon: <span><FontAwesomeIcon icon="landmark"/></span></li>
										<li>Graphs Icon: <span><FontAwesomeIcon icon='chart-pie'/></span></li>
										<li>Goals Icon: <span><FontAwesomeIcon icon="list-alt"/></span></li>
										<li>Settings Icon: <span><FontAwesomeIcon icon='cogs'/></span></li>
								</ul>
						
								<h3>Interaction Icons</h3>
								<ul>
										<li>Add Icon: <span><FontAwesomeIcon icon="plus-circle"/></span></li>
										<li>Close Icon: <span><FontAwesomeIcon icon="times-circle"/></span></li>
										<li>Search Icon: <span><FontAwesomeIcon icon="search"/></span></li>
										<li>Right Icon: <span><FontAwesomeIcon icon='angle-right'/></span></li>
										<li>Left Icon: <span><FontAwesomeIcon icon='angle-left'/></span></li>
								</ul>
						
								<h3>Finance Icons</h3>
								<ul>
										<li>Loan Icon: <span><FontAwesomeIcon icon='file-invoice-dollar'/></span></li>
										<li>Money Icon: <span><FontAwesomeIcon icon="dollar-sign"/></span></li>
										<li>Grocery Icon: <span><FontAwesomeIcon icon='shopping-cart'/></span></li>
										<li>Credit Card Icon: <span><FontAwesomeIcon icon='credit-card'/></span></li>
								</ul>								
            </section>
        
    )
}

export default StyleGuide;