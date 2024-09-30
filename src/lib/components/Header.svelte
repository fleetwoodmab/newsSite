<!-- <header class="flex flex-wrap justify-between pt-10 px-4 pb-2 items-end text-sm">


	<a href="/">Home</a>

	<nav class="flex space-x-4">
		<ul class="flex m-0 gap-4">
			<li>
				<a href="/">Services</a>
			</li>
            <li>
				<a href="/">Contact</a>
			</li>
			<li>
				<a href="/">Language</a>
			</li>
		</ul>
	</nav>

</header> -->
<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
  </script>

<Navbar id="mainNav">
	<NavBrand href="/">
	  <img src="flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Geoinformation Services</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
	  <NavLi class="cursor-pointer">
		Services<ChevronDownOutline class="w-6 h-6 ms-2 inline" />
	  </NavLi>
	  <Dropdown class="w-44 z-20">
		<DropdownItem href="/">Dashboard</DropdownItem>
		<DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
		<DropdownItem href="/">Earnings</DropdownItem>
		<DropdownDivider />
		<DropdownItem href="/">Sign out</DropdownItem>
	  </Dropdown>
	  <NavLi href="/contact">Contact</NavLi>
	  <NavLi class="cursor-pointer">
		DE<ChevronDownOutline class="w-6 h-6 ms-2 inline" />
	  </NavLi>
	  <Dropdown class="w-44 z-20">
		<DropdownItem href="/">EN</DropdownItem>
	  </Dropdown>
	</NavUl>
  </Navbar>

<style lang="postcss">
</style>