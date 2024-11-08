import ScrollToTop from './ScrollToTop';

function PriceList() {
	return (
		<div className="min-h-screen flex flex-col">
			<ScrollToTop />
			<main className="flex-grow">
				<div className='container bg-background flex items-center p-10 shadow-2xl z-50 mt-4 pt-20 text-dark-text'>
					<div className='flex flex-col justify-center text-left'>
						<h3 className='text-3xl sm:text-4xl font-title'>PRICE LIST</h3>
						<p className='text-lg sm:text-xl'>(All prices incl. VAT)</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 text-dark-text">
							{/* Box 1 */}
							<div className="bg-white p-6 rounded-md shadow-lg">
									<h4 className="font-title text-xl mb-2 text-center"><b>CARGO BIKE SERVICE</b></h4>
									<ul className="font-serif text-lg">
										<li>- Safety test</li>
										<li>- Simple cleaning + lubrication hood</li>
										<li>- Adjustment of Brakes</li>
										<li>- Adjustment of Gears</li>
										<li>- Control of the electrical system</li>
									</ul>
									<p className="mt-2 font-title"><b>Price:</b> 1750Kr (+ any spare parts)</p>
							</div>

							{/* Box 2 */}
							<div className="bg-white p-6 rounded-md shadow-lg">
								<h4 className="font-bold text-center text-xl mb-2">FULL SERVICE</h4>
								<ul className="font-serif text-md">
									<li>- Safety test</li>
									<li>- Paint over damage with metallic paint</li>
									<li>- Proper cleaning + lubrication chapel</li>
									<li>- Adjusts spokes</li>
									<li>- Ball bearings</li>
									<li>- Lubrication</li>
									<li>- Brakes</li>
									<li>- Switches</li>
									<li>- Electrical system</li>
								</ul>
								<p className="mt-2 font-title"><b>Price:</b> 2500Kr (incl. VAT + any spare parts)</p>
							</div>

							{/* Box 3 */}
							<div className="bg-white p-6 rounded-md shadow-lg">
								<h4 className="font-bold text-center text-xl mb-2">BICYCLE/ELECTRIC BIKE SERVICE</h4>
								<ul className="font-serif text-lg">
									<li>- Safety test</li>
									<li>- Cleaning</li>
									<li>- Lubrication</li>
									<li>- Brakes</li>
									<li>- Switches</li>
									<li>- + What is needed</li>
								</ul>
								<p className="mt-2 font-title"><b>Price:</b> 720Kr/h (incl. VAT + any spare parts)</p>
							</div>
							
							{/* Wide Box */}
							<div className="bg-white p-6 rounded-lg shadow-lg text-center col-span-1 sm:col-span-2 lg:col-span-3">
								<h4 className="font-bold text-xl mb-2">FIXED PRICES</h4>
								<ul className="grid grid-cols-1 gap-4 font-serif">
									<li className="grid grid-cols-2">
										<span className="text-left">Pickup of cargo bike/bike</span>
										<span className="text-right">720Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Working hours for service and repairs</span>
										<span className="text-right">720Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Fix puncture on site, box bike and electric bike (incl. new hose)</span>
										<span className="text-right">850Kr/tire</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Fix puncture in shop, box bike and electric bike (incl. new hose)</span>
										<span className="text-right">450Kr/tire</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change the brake cable incl. housing pc</span>
										<span className="text-right">450Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change gear cable incl. cover</span>
										<span className="text-right">495Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Tighten and lubricate chain</span>
										<span className="text-right">250Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Replace stainless treated chain and ring</span>
										<span className="text-right">480Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Replace rubber brake pads</span>
										<span className="text-right">185Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change crank bearings</span>
										<span className="text-right">750Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Replace weaving arm, Left</span>
										<span className="text-right">310Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Changing crank parts on a bicycle</span>
										<span className="text-right">590Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change the crank part on a bicycle, 3 parts</span>
										<span className="text-right">890Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change chain and cassette 7 parts</span>
										<span className="text-right">690Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change chain and cassette 8 parts</span>
										<span className="text-right">790Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change chain and cassette 9 parts</span>
										<span className="text-right">950Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Shift lever Nexus 3 switched</span>
										<span className="text-right">490Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Shift lever Nexus 3 geared S-frame</span>
										<span className="text-right">490Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Switch Nexus 7 el. 8-speed</span>
										<span className="text-right">590Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Shift lever Nexus 7 geared S-frame</span>
										<span className="text-right">750Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change front derailleur incl. gear adjustment (depending on model)</span>
										<span className="text-right">from 450Kr</span>
									</li>
									<li className="grid grid-cols-2">
										<span className="text-left">Change rear derailleur incl. gear adjustment (depending on model)</span>
										<span className="text-right">from 550Kr</span>
									</li>
								</ul>
							</div>                    
						</div>
					</div>  
				</div>
			</main>

			<footer className="text-white py-6 mt-10 text-center">
				
			</footer>
		</div>
);
}

export default PriceList;
