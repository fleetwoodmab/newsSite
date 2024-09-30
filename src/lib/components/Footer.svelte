<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    import { FacebookSolid, InstagramSolid, YoutubeSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>
<Footer footerType="socialmedia" class="absolute bottom-0 w-full">
    <div class="grid grid-cols-3 justify-stretch justify-items-center">
      <div class="flex flex-col items-end">
        <FooterBrand href="https://flowbite.com" src="flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" class="max-w-full h-auto"/>
        <p class="text-left text-xs max-w-[125px] w-full -mr-7">Bundesamt fur Geologie, Geophysik, Klimatologie, und Meteorologie</p>
      </div>
  
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kontakt</h2>
        <FooterLinkGroup class="flex flex-col">
          <FooterLink liClass="mb-4 text-sm" href="/">Geosphere Austria 1190 Wien, Hohe Warte 38</FooterLink>
          <FooterLinkGroup class="text-xs flex flex-col">
            <FooterLink class="mb-4" href="/">Detaillirte Kontaktseite</FooterLink>
            <FooterLink class="mb-4" href="/">Presse Kontakte</FooterLink>
          </FooterLinkGroup>
        </FooterLinkGroup>
      </div>
  
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Social Media</h2>
        <FooterLinkGroup>
          <FooterIcon href="/">
            <FacebookSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </FooterIcon>
          <FooterIcon href="/">
            <InstagramSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </FooterIcon>
          <FooterIcon href="/">
            <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </FooterIcon>
            <FooterLinkGroup class="text-xs flex flex-col">
                <FooterLink class="mb-4" href="/">Impressum</FooterLink>
                <FooterLink class="mb-4" href="/">Datenschutz</FooterLink>
                <FooterLink class="mb-4" href="/">Legal</FooterLink>
                <FooterLink class="mb-4" href="/">Barrierefreiheit</FooterLink>
            </FooterLinkGroup>
        </FooterLinkGroup>
      </div>
    </div>

  </Footer>
  



<!-- <footer class="mt-10">
    <nav class="flex justify-center">
        <ul class="flex space-x-4">
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/blog/category">Categories/Projects</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
</footer> -->


<!--
flex on <ul>: lists are automatically block
space-x-4: horizontal spacing between list items
-->