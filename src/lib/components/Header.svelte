<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
  </script>

<Navbar id="mainNav" class="shadow-md">
	<NavBrand href="/">
	  <img src="GSAlogo.png" class="pr-8 h-12 border-r-2 border-dark-blue-green" alt="Geosphere Austria Logo" />
	  <span class="place-self-start whitespace-nowrap text-xl font-semibold ml-4">GeoInformation Services</span>
	</NavBrand>

	<NavHamburger />
	<NavUl classUl="pb-0">

		<NavLi class="cursor-pointer mr-6 text-sm font-semibold"> 
			Services<ChevronDownOutline class="w-6 h-6 inline" />
		</NavLi>
			<Dropdown class="w-44 z-20 p-0 rounded-none bg-blue-grey border-2 border-dark-grey">
				<DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/blog">GeoSphere Maps</DropdownItem>
				<DropdownDivider class="bg-dark-grey my-0" />
				<DropdownItem class="font-semibold text-xs  hover:bg-white hover:text-red" href="/tethys">Tethys RDR</DropdownItem>
				<DropdownDivider class="bg-dark-grey my-0" />
				<DropdownItem class="font-semibold text-xs  hover:bg-white hover:text-red" href="/about">Geodatenkatalog</DropdownItem>
				<DropdownDivider class="bg-dark-grey my-0" />
				<DropdownItem class="font-semibold text-xs  hover:bg-white hover:text-red" href="/contact">Geothermie Atlas</DropdownItem>
				<DropdownDivider class="bg-dark-grey my-0" />
				<DropdownItem class="font-semibold text-xs  hover:bg-white hover:text-red" href="/contact">IRIS</DropdownItem>
				<DropdownDivider class="bg-dark-grey my-0" />
				<DropdownItem class="font-semibold text-xs  hover:bg-white hover:text-red" href="/contact">Multithemtatische Karte</DropdownItem>

			</Dropdown>
		
		<NavLi href="#contact" class="mr-16 text-sm font-semibold">Kontakte</NavLi>

	  <NavLi class="cursor-pointer">
		<span class="border-l-2 border-dark-blue-green pl-5 py-1 text-sm font-semibold">DE</span><ChevronDownOutline class="w-6 h-6 inline" /> <!-- ms-1 or -2 if needed-->
	  </NavLi>
	  <Dropdown class="w-22 z-20 rounded-none bg-blue-grey border-2 border-dark-grey p-0 ">
		<DropdownItem href="/" class="hover:bg-white hover:text-red">English</DropdownItem>
	  </Dropdown>
	</NavUl>
  </Navbar>

