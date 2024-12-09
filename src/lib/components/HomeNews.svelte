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
        ],
      },
      {
        id: 1,
        news: [
          { date: "07.10.2024", title: "GEOSPHERE MAPS - neue Version", content: "Details about GEOSPHERE maps." },
          { date: "03.06.2024", title: "TETHYS - Übersiedlung auf neue Domäne", content: "Details about TETHYS domain migration." },
        ],
      },
      {
        id: 2,
        news: [
          { date: "07.05.2024", title: "TETHYS - Datenzugriff via API", content: "Details about TETHYS API access." },
          { date: "01.05.2024", title: "THESAURUS - Datenbank Update", content: "Details about THESAURUS database update." },
        ],
      },
    ];
  </script>
  <div class="flex">

    <!-- Accordion Content -->
    <div class="flex-1 p-4">
      <Accordion class="border-dark-grey border-t-4 mr-32">
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
              class="flex items-center justify-center h-14 w-14 bg-dark-grey"
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
  
    <!-- Side Tabs (Moved to the Right) -->
    <div class="flex flex-col w-16 items-center space-y-4 py-4">
      {#each tabScreens as tab, index}
        <button
          on:click={() => (activeTab = index)}
          class={`w-1 h-12 ${
            activeTab === index
              ? 'bg-dark-blue-green'
              : 'bg-gray-300 hover:bg-gray-400'
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
  