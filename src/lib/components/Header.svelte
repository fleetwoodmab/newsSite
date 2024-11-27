<script>
    import { Navbar, NavBrand, NavLi, NavUl, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    import { locale, locales, t } from '$lib/translations/i18n';
    $: activeUrl = $page.url.pathname;

    let currentLocale; 
    $: currentLocale = $locale;

    function selectLocale(newLocale) {
        locale.set(newLocale);
    }

    let dropdownOpen = false;
</script>

<Navbar id="mainNav" class="shadow-md">
    <div class="flex justify-between items-center w-full px-4 py-2">
        <NavBrand href="/">
            <img src="/GSAlogo.png" class="sm:h-12 h-auto border-r-2 border-dark-blue-green pr-8" alt="Geosphere Austria Logo" />
            <span class="place-self-start ml-4 text-xl font-semibold whitespace-nowrap sm:inline">GeoInformation Services</span>
        </NavBrand>

        <NavUl classUl="flex items-center pb-0 w-full justify-end">
            <NavLi class="cursor-pointer mr-6 text-sm font-semibold relative">
                Services
                <ChevronDownOutline class="w-6 h-6 inline" />
                <Dropdown class="w-44 z-20 p-0 rounded-none bg-blue-grey border-2 border-dark-grey absolute top-full mt-2" bind:open={dropdownOpen}>
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/blog" on:click={() => (dropdownOpen = false)}>GeoSphere Maps</DropdownItem>
                    <DropdownDivider class="bg-dark-grey my-0" />
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/tethys" on:click={() => (dropdownOpen = false)}>Tethys RDR</DropdownItem>
                    <DropdownDivider class="bg-dark-grey my-0" />
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/about" on:click={() => (dropdownOpen = false)}>Geodatenkatalog</DropdownItem>
                    <DropdownDivider class="bg-dark-grey my-0" />
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/contact" on:click={() => (dropdownOpen = false)}>Geothermie Atlas</DropdownItem>
                    <DropdownDivider class="bg-dark-grey my-0" />
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/contact" on:click={() => (dropdownOpen = false)}>IRIS</DropdownItem>
                    <DropdownDivider class="bg-dark-grey my-0" />
                    <DropdownItem class="font-semibold text-xs hover:bg-white hover:text-red" href="/contact" on:click={() => (dropdownOpen = false)}>Multithematische Karte</DropdownItem>
                </Dropdown>
            </NavLi>

            <NavLi href="#contact" class="mr-6 text-sm font-semibold">{$t("nav.contact")}</NavLi>

            <NavLi class="cursor-pointer relative">
                <span class="border-l-2 border-dark-blue-green pl-5 py-1 text-sm font-semibold">
                    {currentLocale.toUpperCase()}
                </span>
                <ChevronDownOutline class="w-6 h-6 inline" />
                <Dropdown class="w-22 z-20 rounded-none bg-blue-grey border-2 border-dark-grey p-0 absolute top-full mt-2">
                    {#each locales as l}
                        <DropdownItem on:click={() => selectLocale(l)} class="hover:bg-white hover:text-red cursor-pointer">
                            {l.toUpperCase()}
                        </DropdownItem>
                    {/each}
                </Dropdown>
            </NavLi>
        </NavUl>
    </div>
</Navbar>
