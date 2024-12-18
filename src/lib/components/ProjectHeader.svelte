<script>
    import { locale } from "$lib/translations/i18n";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    export let descFetchUrl;
    export let projImgUrl;
    export let logoSrcUrl;
    export let linkHref = '';

    let projImg = "";       
    let logoSrc = "";       
    let description = "";      

    import clsx from 'clsx';
    export let accentColour = '';
    console.log(accentColour);
    

    /*------*/

    let currentLocale = get(locale);
    $: locale.subscribe(value => currentLocale = value);
  
    $: fetchProjectInfo(currentLocale);
  
    async function fetchProjectInfo(language) {
        if (!descFetchUrl) {
          throw new Error("Fetch URL missing");
        }
  
        const response = await fetch(descFetchUrl);
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`${errorText}`);
        }
  
        const data = await response.json();
  
       /* projImg = data.projectImage || "";
        logoSrc = data.logo || "";
        linkHref = data.projectLink || ""; */
  
        const languageContent = data.features.find(
          (feature) => feature.attributes.Sprache === language.toUpperCase()
        );
  
        if (languageContent) {
          description = languageContent.attributes.Inhalt;
        } else {
          throw new Error(`No description available for language: ${language}`);
        }
    }

  async function fetchProjImage() {

      const response = await fetch(projImgUrl);
      if (!response.ok) throw new Error("Failed to fetch image");

      const data = await response.json();
      projImg = data.features[0]?.attributes.Inhalt || ""; 
    
  }

  async function fetchLogoImage() {

      const response = await fetch(logoSrcUrl);
      if (!response.ok) throw new Error("Failed to fetch logo");

      const data = await response.json();
      logoSrc = data.features[0]?.attributes.Inhalt || ""; 
  }

  onMount(async () => {
        await fetchProjImage();
        await fetchLogoImage();
    });
</script>



  
<section class="mb-5">
    <div class="flex justify-center items-center px-6">
      <div class="flex w-full max-w-5xl">
        {#if projImg}
          <img src={projImg} class="w-80 border-2 p-2" />
        {:else}
          <p>Loading image...</p>
        {/if}
  
        <div class="flex-grow ml-8 relative">
          {#if logoSrc}
            <img src={logoSrc} alt="Logo" class="h-12" />
            {:else}
            <p>Loading image...</p>
          {/if}
  
          {#if description}
            <p class="text-lg text-light-grey pt-8 text-justify">{description}</p>
          {:else}
            <p>Loading description...</p>
          {/if}
  
          <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          class={clsx('underline pt-16 flex absolute bottom-0 hover:font-semibold ', accentColour)}
          >
          {linkHref}
        </a>

        </div>
      </div>
    </div>
</section>
  