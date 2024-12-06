<script lang="ts">
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
    import { t } from "$lib/translations/i18n";
    import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
</script>

<!-- Presentation Section -->
<section class="mt-20 max-w-screen-lg mx-auto mb-20">
    <div class="flex flex-col sm:flex-row w-full max-w-4xl mx-auto ml-0"> 
        <img src="/pic.png" alt="" class="h-48 border-2 p-2">
        <div class="flex-grow mt-6 sm:mt-0 sm:ml-8 text-center sm:text-justify">
            <h1 class="text-3xl mb-5 font-semibold text-dark-blue-green">Geoinformation</h1>
            <p class="text-md text-light-grey">{$t("homepage.description")}</p>
        </div>
    </div>    
</section>

<!-- News Accordion Section -->
<section class="max-w-screen-lg mx-auto mb-20">
    <h2 class="text-2xl font-bold mb-8 text-dark-blue-green">News</h2>
    <Accordion class="border-dark-grey border-t-4 mr-32"> 
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <div slot="arrowdown">
                <AngleDownOutline class="h-6 w-6 -me-0.5" />
            </div>
            <div slot="arrowup">
                <AngleUpOutline class="h-6 w-6 -me-0.5" />
            </div>
            <p class="text-light-grey ml-36 text-sm mt-[-20px]">Blablabla</p>
        </AccordionItem>
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <div slot="arrowdown">
                <AngleDownOutline class="h-6 w-6 -me-0.5" />
            </div>
            <div slot="arrowup">
                <AngleUpOutline class="h-6 w-6 -me-0.5" />
            </div>
            <p class="text-light-grey ml-36 text-sm mt-[-20px]">Blablabla</p>
        </AccordionItem>
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0" paddingFlush="pb-0">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <p class="text-light-grey ml-36 text-sm mt-[-20px]">Blablabla</p>
            <div slot="arrowdown">
                <AngleDownOutline class="h-6 w-6 -me-0.5" />
            </div>
            <div slot="arrowup">
                <AngleUpOutline class="h-6 w-6 -me-0.5" />
            </div>
        </AccordionItem>
    </Accordion>
</section>

<!-- Services Section -->
<section class="bg-blue-grey pt-20 pb-40">
    <div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg">
        <h2 class="text-2xl col-span-3 mb-8 text-left font-bold text-dark-blue-green">Services</h2> 

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 col-span-3 justify-center items-center"> 
            <ImagePlaceholder imgOnly size='xxl' class="animate-none" />
            <ImagePlaceholder imgOnly size='xxl' class="animate-none" />
            <ImagePlaceholder imgOnly size='xxl' class="animate-none" />
        </div>
    </div>
</section>

<style>
    * {
        height: 100%;
    }
</style>
