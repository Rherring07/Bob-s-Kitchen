document.write(`\
	<section id = "header-container">
		<div id = "container-flex">
			<div id = "header-logo">
				<a class = logo href = "Home.html"><h4> Bob's Kitchen </h4> </a>
			</div>
			<nav id = "header-nav">
				<div class = "header-hero">
					<ul id = "header-nav-ul">
						<li><a class = "link" href = "Menu.html">Our Menu</a></li>
						<li><a class = "link" href = "Catering.html">Catering</a></li>
						<li><a class = "link" href = "Careers.html">Careers</a></li>
						<li><a class = "link" href = "ContactUs.html">Contact Us</a></li>
						<li class = "header-order-button">
							<a class = "button" href = "Order.html">Order Now!</a>
						</li>
					</ul>
				</div>
				<div class = "header-hamburger-links">
					<div id = "hamburger-nav-ul">
						<a class = "link" href = "Menu.html">Our Menu</a>
						<a class = "link" href = "Catering.html">Catering</a>
						<a class = "link" href = "Careers.html">Careers</a>
						<a class = "link" href = "ContactUs.html">Contact Us</a>
						<a class = "header-order-link link" href = "Order.html">Order Now!</a>
					</div>
				</div>
				<div id = "header-hamburger">
					<img src = "hamburger.svg" alt = "menu-drop-down">
				</div>
			</nav>
		</div>
	</section>
`);
