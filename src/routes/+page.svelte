<script lang="ts">
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
    import { t } from "$lib/translations/i18n";
    import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
    import HomeNews from '$lib/components/HomeNews.svelte';
</script>

<!-- Hero Section -->
<section class="mt-20 max-w-screen-lg mx-auto mb-20">
    <div class="flex flex-col sm:flex-row w-full max-w-5xl mx-auto ml-0"> 
        <img src="/pic.png" alt="" class="h-auto border-2 p-2 flex-shrink-0 self-stretch">
        <div class="flex-grow mt-6 sm:mt-0 sm:ml-8 text-center sm:text-justify">
            <h1 class="text-3xl mb-5 font-semibold text-dark-blue-green">Geoinformation</h1>
            <p class="text-lg text-light-grey">{$t("homepage.description")}</p>
        </div>
    </div>    
</section>


<!-- News Accordion Section -->
<section class="max-w-screen-lg mx-auto mb-20">
   
    <HomeNews/>
</section>

<!-- Services Section -->
<section class="bg-blue-grey pt-20 pb-40">
    <div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg">
        <h2 class="text-2xl col-span-3 mb-20 text-left font-bold text-dark-blue-green">Services</h2> 

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3"> 
            <img src="tethysHome.png" alt="">
            <img src="geosphereMaps.png" alt="">
            <img src="thesaurus.png" alt="">
        </div>
    </div>
</section>

<style>
    * {
        height: 100%;
    }
</style>
