<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    import { FacebookSolid, InstagramSolid, YoutubeSolid, TwitterSolid } from 'flowbite-svelte-icons';
</script>
<Footer class="bottom-0 w-full text-white" id="contact">

  <section class="grid grid-cols-3 justify-stretch justify-items-center py-8 bg-light-blue-green">
      <p class="text-left text-xs max-w-[125px] w-full -mr-7">Department Geoinformation</p>
      
      <div>
        <h2 class="mb-6 text-sm font-semibold">Kontakt</h2>
        <div class="flex flex-col">
          <p class="mb-4 text-sm">Standort Neulingasse 38, 1030 Wien</p>
          <ul class="text-sm">
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </section>


  <!-- Second Footer -->
    <section class="grid grid-cols-3 justify-stretch justify-items-center bg-dark-blue-green pt-12 pb-0">
      <div class="flex flex-col items-end "> 
        <FooterBrand href="https://flowbite.com" src="flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" class="max-w-full h-auto"/>
        <p class="text-left text-xs max-w-[125px] w-full -mr-7">Bundesamt fur Geologie, Geophysik, Klimatologie, und Meteorologie</p>
      </div>
  
      <div class="flex flex-col justify-between mb-10">
        <h2 class="mb-6 text-sm font-semiboldtext-white">Kontakt</h2>
        <FooterLinkGroup class="flex flex-col">
          <FooterLink liClass="mb-4 text-sm" href="/">Geosphere Austria <br> 1190 Wien, Hohe Warte 38</FooterLink>
          <FooterLinkGroup class="text-xs grid grid-cols-2 gap-y-5 mt-8">
            <FooterLink class="mb-4" href="/">Detaillirte Kontaktseite</FooterLink>
            <FooterLink class="mb-4" href="/">Presse Kontakte</FooterLink>
          </FooterLinkGroup>
        </FooterLinkGroup>
      </div>
      
      <div class="flex flex-col justify-start gap-[25px] h-full">
        <h2 class="text-sm font-semibold uppercase text-white">Social Media</h2>
  
        <FooterLinkGroup class="grid grid-cols-3 gap-y-4 text-left">
          <FooterIcon href="https://www.instagram.com" class="flex items-center space-x-2">
            <InstagramSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Instagram</span>
          </FooterIcon>
          <FooterIcon href="https://www.twitter.com" class="flex items-center space-x-2">
            <TwitterSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Twitter/X</span>
          </FooterIcon>
          <FooterIcon href="https://www.youtube.com" class="flex items-center space-x-2">
            <YoutubeSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Youtube</span>
          </FooterIcon>
          <FooterIcon href="https://www.facebook.com" class="flex items-center space-x-2">
            <FacebookSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Facebook</span>
          </FooterIcon>
          <FooterIcon href="https://www.youtube.com" class="flex items-center space-x-2">
            <YoutubeSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Youtube</span>
          </FooterIcon>
          <FooterIcon href="https://www.facebook.com" class="flex items-center space-x-2">
            <FacebookSolid class="w-6 h-6 text-gray-400 hover:text-green-400" />
            <span class="text-gray-400 hover:text-green-400">Facebook</span>
          </FooterIcon>
        </FooterLinkGroup>
        
        
  
        <!-- Footer Links -->
        <FooterLinkGroup class="text-xs grid grid-cols-4 gap-5">
          <FooterLink href="/">Impressum</FooterLink>
          <FooterLink href="/">Datenschutz</FooterLink>
          <FooterLink href="/">Legal</FooterLink>
          <FooterLink href="/">Barrierefreiheit</FooterLink>
        </FooterLinkGroup>
      </div>
      
      


    </section>

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