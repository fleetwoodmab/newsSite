<script>
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
    import { t } from "$lib/translations/i18n";
    import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
    import { fade } from 'svelte/transition';
  
    let activeTab = 0;
  
    const tabScreens = [
      {
        id: 0,
        news: [
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
          { date: "07.05.2024", title: "TETHYS - Datenzugriff via API", content: "Details about TETHYS API." },
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
        ],
      },
      {
        id: 1,
        news: [
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
          { date: "07.05.2024", title: "TETHYS - Datenzugriff via API", content: "Details about TETHYS API." },
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
        ],
      },
      {
        id: 2,
        news: [
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
          { date: "07.05.2024", title: "TETHYS - Datenzugriff via API", content: "Details about TETHYS API." },
          { date: "09.10.2024", title: "THESAURUS - Aktualisierung", content: "Details about THESAURUS update." },
          { date: "08.10.2024", title: "TETHYS - neue Release", content: "Details about TETHYS release." },
        ],
      },
    ];
  </script>

<h2 class="text-2xl font-bold mb-8 text-dark-blue-green">News</h2>
<div class="flex">
  
  <!-- Main Content Area -->
  <div class="flex-1 flex flex-col">
    
    <!-- Accordion Content -->
    <div class="flex-1 py-4">
      <Accordion class="border-accent-grey border-t-2">
        {#each tabScreens[activeTab].news as newsItem}
          <AccordionItem
            class="accordion-item pr-0 py-0"
            defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey"
            activeClass="inherit bg-white border-b-0"
          >
            <span slot="header" class="text-light-grey text-xs">
              {newsItem.date}
              <span class="ml-20 text-dark-blue-green text-base">
                {newsItem.title}
              </span>
            </span>
            <div
              slot="arrowdown"
              class="flex items-center justify-center h-14 w-14 bg-accent-grey "
            >
              <AngleDownOutline class="h-6 w-6 text-white" />
            </div>
            <div
              slot="arrowup"
              class="flex items-center justify-center h-14 w-14 bg-white"
            >
              <AngleUpOutline class="h-6 w-6 text-dark-grey" />
            </div>
            <p class="text-light-grey ml-36 text-sm mt-[-20px] pb-10">
              {newsItem.content}
            </p>
          </AccordionItem>
        {/each}
      </Accordion>
    </div>
  </div>

  <!-- Side Tabs 'Nav' -->
  <div class="flex flex-col w-8 items-end space-y-12 my-4 ">
    {#each tabScreens as tab, index}
      <button
        on:click={() => (activeTab = index)}
        class={`w-1 h-full rounded-lg ${
          activeTab === index
            ? 'bg-accent-grey'
            : 'bg-gray-300 hover:bg-accent-grey'
        }`}
      >
      </button>
    {/each}
  </div>
</div>




  
  
  <style>
    button:hover {
      transition: background-color 0.2s ease-in-out;
    }
  </style>
  