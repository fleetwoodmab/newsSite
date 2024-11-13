<script>
    import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
    import { Label, Input } from "flowbite-svelte";

    import Faq from "$lib/components/FAQ.svelte";

    let activeTab = 'News';



</script>
  <div class="container mx-auto my-24">
    <Breadcrumb aria-label="Default breadcrumb example" class="mt-[-55px]">
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      <BreadcrumbItem>Tethys</BreadcrumbItem>
    </Breadcrumb>
    
    <section class=" mb-5">
        <div class="flex justify-center items-center mt-20 px-6"> 
            <div class="flex w-full max-w-4xl"> 
                <img src=" /tethysHome.png" alt="" class="h-36">
                <div class="flex-grow ml-8">
                  <img src=" /tethysLogo.svg" alt="" class="h-10">
                      <p class="text-md text-light-grey pt-6">Über Tethys RDR (tethys.at) werden innerhalb der Organisation generierte Forschungsdaten als open data und nach den FAIR Prinzipien veröffentlicht.</p> 
                        <a href="tethys.at" class="text-teal underline absolute pt-3">tethys.at</a>
                </div>
            </div>
        </div>    
    </section>
  
    <!-- Tabs Component -->
    <div class="flex w-full max-w-4xl mx-auto pt-12">
      <div class="">
        <ul class="flex flex-wrap -mb-px ">
          <li class="mr-2">
            <a href="#"
               class="inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey {activeTab === 'News' ? 'activeTab' : ''}" 
               on:click="{() => activeTab = 'News'}">News</a>
          </li>
          <li class="mr-2">
            <a href="#" 
               class="inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey {activeTab === 'Info' ? 'activeTab' : ''}" 
               on:click="{() => activeTab = 'Info'}">Info</a>
          </li>
          <li>
            <a href="#" 
               class="inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey {activeTab === 'FAQs' ? 'activeTab' : ''}" 
               on:click="{() => activeTab = 'FAQs'}">FAQs</a> 
          </li>
        </ul>
        
      </div>
    </div>
    
    <!-- Conditionally Render Tabs Content -->
    {#if activeTab === 'News'}
      <div class="w-full max-w-4xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative" style="clip-path: polygon(-0.44% -2.20%, 0.39% -2.77%, 0.51% 13px, 7.24% 13px, 7.02% -3.52%, 100% -1.45%, 100% 100%, 0px 100%)">
        <Accordion defaultClass="" activeClass="bg-white border-b-0 text-teal">
                <AccordionItem class="" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" >
                    <span slot="header" class="text-xs">09.10.2024 <span class="ml-20 text-base ">THESAURUS - Aktualisierung</span> </span>
                    <p class=" ml-36 text-sm mt-[-20px]">
                        Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </AccordionItem>
                <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0  text-teal">
                    <span slot="header" class=" text-xs">09.10.2024 <span class="ml-20 text-base">THESAURUS - Aktualisierung</span> </span>
                    <p class=" ml-36 text-sm mt-[-20px]">
                      Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </AccordionItem>
                <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0  text-teal" paddingFlush="pb-0">
                    <span slot="header" class=" text-xs">09.10.2024 <span class="ml-20 text-base">THESAURUS - Aktualisierung</span> </span>
                    <p class=" ml-36 text-sm mt-[-20px]">
                      Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </AccordionItem>
        </Accordion>
      </div>
    {/if}
  
    <!-- Info and FAQs -->
    {#if activeTab === 'Info'}
      <div class="w-full max-w-4xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative" style="clip-path: polygon(-0.11% -0.35%, 7.65% -1.66%, 7.76% 11px, 12.93% 12px, 12.94% -1.89%, 100% -1.45%, 100% 100%, 0px 100%)">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, impedit magni voluptatum ipsum optio qui excepturi iure illo, ipsa sint voluptatibus dolores reprehenderit possimus dicta quae provident repellat! Eaque, enim?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nemo enim sed possimus sequi libero nobis magni laborum quaerat ea odit debitis repellat, temporibus nam dolorum ex aliquam nesciunt odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum accusantium consequuntur vero harum assumenda neque quam laudantium facere maxime sit, quo voluptatum similique iusto fuga itaque est molestiae suscipit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, impedit magni voluptatum ipsum optio qui excepturi iure illo, ipsa sint voluptatibus dolores reprehenderit possimus dicta quae provident repellat! Eaque, enim?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nemo enim sed possimus sequi libero nobis magni laborum quaerat ea odit debitis repellat, temporibus nam dolorum ex aliquam nesciunt odio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum accusantium consequuntur vero harum assumenda neque quam laudantium facere maxime sit, quo voluptatum similique iusto fuga itaque est molestiae suscipit.</p>
      
      </div>
    {/if}
  
    {#if activeTab === 'FAQs'}
      <Faq />
      <!-- <div class="w-full max-w-4xl mx-auto mb-5 mt-3 border-grey border-4 p-8" style="clip-path: polygon(-0.11% -0.35%, 13.67% -0.74%, 13.68% 11px, 19.97% 11px, 20.08% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)">
        <Input id="small-input" size="sm" placeholder="FAQs durchsuchen" />

        <hr class="my-8">

        <Accordion flush activeClass="text-lime-green">
          <AccordionItem open>
            <span slot="header">Technische Belange</span>
            <Accordion flush>
              <AccordionItem>
                <span slot="header" class="text-sm">Wie erhalte ich eine Zugang?</span>
                <p class="mb-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                <p class="text-gray-500 ">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
              </AccordionItem>
              <AccordionItem open >
                <span slot="header" class="text-sm" >Gibt es blabla?</span>
                <p class="mb-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                <p class="mb-2 text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                <p class="mb-2 text-gray-500 ">Learn more about these technologies:</p>
                <ul class="list-disc ps-5 text-gray-500">
                  <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline">Lorem ipsum</a></li>
                  <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline">Tailwind UI</a></li>
                </ul>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem>
            <span slot="header">My Header 2</span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
              <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline">Lorem ipsum</a></li>
              <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline">Tailwind UI</a></li>
            </ul>
          </AccordionItem>
        </Accordion>
        
        
      </div> -->
    {/if}
  </div>

  
  <style>
    .activeTab {
      border: 4px solid;
      border-bottom: none;
      font-weight: bold; 
      border-color: #e5e7eb;
      color: #3692BC;
    }

  </style>
  