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

<Navbar id="mainNav" class="shadow-md">
	<NavBrand href="/">
	  <img src="GSAlogo.png" class="pr-8 h-12 border-r-2 border-dark-blue-green" alt="Geosphere Austria Logo" />
	  <span class="place-self-start whitespace-nowrap text-l font-bold ml-3">Geoinformation Services</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl} classUl="pb-0">
	  <NavLi class="cursor-pointer">
		Services<ChevronDownOutline class="w-6 h-6 ms-2 inline" />
	  </NavLi>
	  <Dropdown class="w-44 z-20">
		<DropdownItem href="/blog">Blog</DropdownItem>
		<DropdownItem href="/blog/category">Categories</DropdownItem>
		<DropdownItem href="/about">About</DropdownItem>
		<DropdownDivider />
		<DropdownItem href="/contact">Contact</DropdownItem>
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