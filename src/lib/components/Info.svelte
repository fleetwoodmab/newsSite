<script>
    import { onMount } from "svelte";
    import { locale } from "$lib/translations/i18n";
    import { get } from 'svelte/store'; 
  
    export let infoFetchUrl;
  
    let contentItem = null;
    let errorMessage = '';
  
    let currentLocale = get(locale);
    $: locale.subscribe(value => currentLocale = value);
  
    $: fetchContent(currentLocale);
  
    async function fetchContent(language) {
        try {
            if (!infoFetchUrl) {
                throw new Error('Fetch URL not provided');
            }
  
            const response = await fetch(infoFetchUrl);
  
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }
  
            const data = await response.json();
  
            const languageContent = data.features.find(
                feature => feature.attributes.Sprache === language.toUpperCase()
            );
  
            if (languageContent) {
                contentItem = languageContent.attributes.Inhalt;
            } else {
                throw new Error(`No content available for language: ${language}`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            errorMessage = error.message;
        }
    }
  </script>
  
  <div class="w-full max-w-5xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative"
    style="clip-path: polygon(-0.11% -0.35%, 6.87% -1.94%, 6.79% 13px, 11.37% 14px, 11.28% -2.44%, 100% -1.45%, 100% 100%, 0px 100%)">
  
    {#if errorMessage}
        <p class="text-red-500">Error: {errorMessage}</p>
    {:else if contentItem}
        <div>
            {@html contentItem}
        </div>
    {:else}
        <p>Loading content...</p>
    {/if}
  
  </div>
  
  
  <style>
  @media (max-width: 768px) {
    div {
      clip-path: none !important;
    }
  }
  </style>
  