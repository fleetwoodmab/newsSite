<script>
    import { t } from "$lib/translations/i18n";
    import { Accordion, AccordionItem, Input } from "flowbite-svelte";
    import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    
    export let faqFetchUrl;
    
    let searchTerm = "";
    let faqItems = [];
    let errorMessage = '';
  
    onMount(async () => {
      try {
        if (!faqFetchUrl) {
          throw new Error('Fetch URL not provided');
        }
  
        const response = await fetch(faqFetchUrl);
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
  
        const data = await response.json();
  
        faqItems = data.features.map(feature => ({
          title: feature.attributes.Ueberschrift, 
          content: feature.attributes.Inhalt 
        }));
  
      } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage = error.message;
      }
    });
  
    $: filteredFaqItems = faqItems.filter(item => 
      searchTerm.length === 0 || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  </script>
  
  <div class="w-full max-w-5xl mx-auto mb-5 border-grey border-4 p-8 top-3 relative" style="clip-path: polygon(-0.11% -0.35%, 11.92% -2.79%, 12.02% 15px, 17.43% 14px, 17.44% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)">
    <Input
      id="small-input"
      type="text"
      bind:value={searchTerm}
      placeholder="{$t("tabs.faq")}"
      class="border p-2 rounded w-full text-xs text-light-grey focus:ring-0 focus:border-gray-300 bg-white"
    />
  
    <hr class="mt-4">
  
    {#if errorMessage}
    <p class="text-red-500">Error: {errorMessage}</p>
  {:else if faqItems.length > 0}
    <Accordion flush activeClass="text-lime-green">
      {#each filteredFaqItems as item}
        <AccordionItem class="text-sm font-bold hover:text-teal">
          <span slot="header" class="pl-1">{item.title}</span>
          <div slot="arrowup">
            <MinusOutline class="" />
          </div>
          <span slot="arrowdown">
            <PlusOutline class="" />
          </span>
          <p class="mb-2 pl-3 text-sm">{item.content}</p>
        </AccordionItem>
      {/each}
    </Accordion>
  {:else}
    <p>Loading FAQs...</p>
  {/if}
 
  </div>

<style>
  @media (max-width: 768px) {
    div {
      clip-path: none !important;
    }
}
</style>


  
  
  <!-- accordion in case need of sub-accordions
      {#if errorMessage}
      <p class="text-red-500">Error: {errorMessage}</p>
    {:else if faqItems.length > 0}
      <Accordion flush activeClass="text-lime-green">
        {#each filteredFaqItems as item}
          <AccordionItem class="text-xs font-bold">
            <span slot="header" class="pl-1">{item.title}</span>
            <Accordion flush class="mt-[-10px] pl-3">
              <AccordionItem class="py-4">
                <span slot="header" class="text-xs hover:text-teal">{item.title}</span>
                <p class="mb-2 font-light pl-3 text-xs">{item.content}</p>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        {/each}
      </Accordion>
    {:else}
      <p>Loading FAQs...</p>
    {/if}
  -->
  