<script>
    import { onMount } from 'svelte';
    import { Accordion, AccordionItem } from 'flowbite-svelte';
    
    export let newsFetchUrl;  
    
    let accordionData = [];
    let errorMessage = '';
  
    onMount(async () => {
      try {
        if (!newsFetchUrl) {
          throw new Error('Fetch URL not provided');
        }
        
        const response = await fetch(newsFetchUrl);
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
  
        const data = await response.json();
  
        accordionData = data.features.map(feature => ({
          date: feature.attributes.Datum,
          title: feature.attributes.Ueberschrift,
          content: feature.attributes.Inhalt
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage = error.message;
      }
    });
</script>
  
<div class="w-full max-w-4xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative" style="clip-path: polygon(-0.44% -2.20%, 0.39% -2.77%, 0.51% 13px, 7.24% 13px, 7.02% -3.52%, 100% -1.45%, 100% 100%, 0px 100%)">
    {#if errorMessage}
      <p class="text-red-500">Error: {errorMessage}</p>
    {:else if accordionData.length > 0}
      <Accordion defaultClass="" activeClass="bg-white border-b-0 text-teal">
        {#each accordionData as item}
          <AccordionItem
            class="accordion-item"
            defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey"
            activeClass="inherit bg-white border-b-0 text-teal"
          >
            <span slot="header" class="text-xs">
              {item.date} <span class="ml-20 text-base">{item.title}</span>
            </span>
            <p class="ml-36 text-sm mt-[-20px]">{item.content}</p>
          </AccordionItem>
        {/each}
      </Accordion>
    {:else}
      <p>Loading features...</p>
    {/if}
</div>

<style>
  @media (max-width: 768px) {
    div {
      clip-path: none !important;
    }
  }
</style>
