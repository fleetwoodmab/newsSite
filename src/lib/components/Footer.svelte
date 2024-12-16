<script>
    import { t } from '$lib/translations/i18n';
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, A } from 'flowbite-svelte';
  import { EnvelopeOutline, PhoneOutline } from 'flowbite-svelte-icons';
</script>

<Footer class="bottom-0 w-full text-white" id="contact">

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-stretch justify-items-center py-12 px-10 bg-light-blue-green">
    <p class="text-left text-2xl font-semibold max-w-[100px] w-full ml-10 sm:text-center md:text-left">Department Geoinformation</p>
    
    <div class="sm:text-center md:text-left mr-64">
      <h2 class="mb-6 text-xl font-semibold">{$t("nav.contact")}</h2>
      <div class="flex flex-col items-center md:items-start">
        <p class="mb-4 text-sm">Standort Neulingasse 38, <br> 1030 Wien</p>
        <ul class="text-sm text-center md:text-left">
          <li class="flex items-center">
            <EnvelopeOutline class="mr-2" /> gis@geosphere.at
          </li>
          <li class="flex items-center mt-2">
            <PhoneOutline class="mr-2" /> +43 1 7125674
          </li>
        </ul>
      </div>
    </div>
</section>

<!-- Second Footer -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-stretch justify-items-center bg-dark-blue-green pt-14 pb-12 pl-12 pr-40 ">
    <div class="flex flex-col items-center sm:items-start justify-center ml-10 mb-4 -mt-5">
      <img src="GSALogo.svg" class="w-64 h-auto" />
    </div>

    <div class="flex flex-col justify-between mb-10 sm:text-center md:text-left">
      <h2 class="mb-6 text-xl font-semibold text-white">{$t("nav.contact")}</h2>
      <FooterLinkGroup class="flex flex-col items-center md:items-start">
        <span class="mb-4 text-sm text-white">Geosphere Austria <br> 1190 Wien, Hohe Warte 38</span>
        <FooterLinkGroup class="text-sm text-white grid grid-cols-1 sm:grid-cols-2 gap-y-5 mt-8 ">
          <li class="mb-4 pr-2 border-r-2 border-lime-green hober:decoration-solid"><a href="https://geosphere.at/en/about-us/contact-and-visit">{$t("nav.dtcontact")}</a></li>
          <li class="mb-4 pl-2"><a href="https://beta.geosphere.at/en/about-us/media">{$t("nav.prsscontact")}</a></li>
        </FooterLinkGroup>
      </FooterLinkGroup>
    </div>
    
    <div class="flex flex-col justify-start gap-[25px] h-full sm:text-center md:text-left">
      <h2 class="text-sm font-semibold uppercase text-white">Social Media</h2>

      <FooterLinkGroup class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        <FooterIcon href="https://www.instagram.com/GeoSphere_AT" class="flex items-center space-x-2">
          <img src="instagram.svg" alt="Instagram Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">Instagram</span>
        </FooterIcon>
        <FooterIcon href="https://x.com/GeoSphere_AT" class="flex items-center space-x-2 ml-6">
          <img src="x.svg" alt="X Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">X</span>
        </FooterIcon>
        <FooterIcon href="https://www.youtube.com/@geosphereaustria2023" class="flex items-center space-x-2 ml-6">
          <img src="youtube.svg" alt="Youtube Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">Youtube</span>
        </FooterIcon>
        <FooterIcon href="https://www.facebook.com/GeoSphere.at" class="flex items-center space-x-2">
          <img src="facebook.svg" alt="Facebook Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">Facebook</span>
        </FooterIcon>
        <FooterIcon href="https://at.linkedin.com/company/geosphereaustria" class="flex items-center space-x-2 ml-6">
          <img src="linkedin.svg" alt="LinkedIn Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">LinkedIn</span>
        </FooterIcon>
        <FooterIcon href="https://www.flickr.com/photos/geosphere_austria" class="flex items-center space-x-2 ml-6">
          <img src="flickr.svg" alt="Flickr Icon" class="w-7 h-7 hover:scale-75 duration-150 ease-out hover:ease-in" />
          <span class="text-white hover:underline">Flickr</span>
        </FooterIcon>
      </FooterLinkGroup>
      
      <ul class="text-sm flex flex-wrap">
        <li class="border-r-2 border-lime-green hover:underline pr-2"><a href="https://beta.geosphere.at/de/impressum">Impressum</a></li>
        <li class="border-r-2 border-lime-green hover:underline px-2"><a href="https://geosphere.at/en/privacy">{$t("nav.data")}</a></li>
        <li class="border-r-2 border-lime-green hover:underline px-2"><a href="https://geosphere.at/en/legal">Legal</a></li>
        <li class="pl-2 hover:underline"><a href="https://geosphere.at/de/accessibility">{$t("nav.access")}</a></li> 
      </ul>
    </div>
  
</section>

</Footer>
