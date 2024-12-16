<script>
  import { onMount } from "svelte";
  import { locale } from "$lib/translations/i18n";
  import { get } from 'svelte/store';

  export let descFetchUrl;

  let projImg = '';
  let logoSrc = '';
  let description = '';
  let errorMessage = '';

  let currentLocale = get(locale);
  $: locale.subscribe(value => currentLocale = value);

  $: fetchProjectInfo(currentLocale);

  async function fetchProjectInfo(language) {
      try {
          if (!descFetchUrl) {
              throw new Error('Fetch URL not provided');
          }

          const response = await fetch(descFetchUrl);

          if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Network response was not ok: ${errorText}`);
          }

          const data = await response.json();

          projImg = data.projectImage || '';
          logoSrc = data.logo || '';

          const languageContent = data.features.find(
              feature => feature.attributes.Sprache === language.toUpperCase()
          );

          if (languageContent) {
              description = languageContent.attributes.Inhalt;
          } else {
              throw new Error(`No description available for language: ${language}`);
          }
      } catch (error) {
          console.error('Error fetching project info:', error);
          errorMessage = error.message;
      }
  }
</script>

<section class="mb-5">
  <div class="flex justify-center items-center px-6">
      <div class="flex w-full max-w-5xl">
          {#if projImg}
              <img src={projImg} alt="Project Image" class="w-80 border-2 p-2" />
          {:else}
              <p class="text-gray-500">Loading image...</p>
          {/if}
          
          <div class="flex-grow ml-8">
              {#if logoSrc}
                  <img src={logoSrc} alt="Logo" class="h-12" />
              {:else}
                  <p class="text-gray-500">Loading logo...</p>
              {/if}

              {#if errorMessage}
                  <p class="text-red-500">Error: {errorMessage}</p>
              {:else if description}
                  <p class="text-lg text-light-grey pt-8 text-justify">{description}</p>
              {:else}
                  <p>Loading description...</p>
              {/if}
              
              <a href={linkHref} target="_blank" rel="noopener noreferrer" 
                  class="text-teal underline absolute pt-6">
                  {new URL(linkHref).hostname || "Visit"}
              </a>
          </div>
      </div>
  </div>
</section>


