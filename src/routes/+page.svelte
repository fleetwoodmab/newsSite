<script lang="ts">
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
</script>

<section class="">
    <div class="flex justify-center items-center mt-20 px-6"> 
        <div class="flex w-full max-w-4xl"> 
            <img src="/pic.png" alt="" class="h-auto">
            <div class="flex-grow ml-8">
                <h1 class="text-3xl mb-5 font-semibold text-dark-blue-green">Geoinformation</h1>
                <p class="text-md text-light-grey">GeoSphere Austria, die neu gegründete Bundesanstalt für Geologie, Geophysik, Klimatologie und Meteorologie, liefert wichtige Grundlagen zu den großen Herausforderungen unserer Gesellschaft. <br> Eine wichtige Grundlage ist die systematische und nachhaltige Verarbeitung und Bereitstellung der Daten. Das Department für Geoinformation trägt zur Erfüllung dieser Aufgabe mit diesen Services bei.</p>
            </div>
        </div>
    </div>    
</section>

<section class=" max-w-screen-xl mx-auto my-40">
    <h2 class="text-2xl font-bold mb-8">News</h2>
    <Accordion class="border-dark-grey border-t-4 ">
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0 ">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <p class="text-light-grey ml-36 text-sm mt-[-25px]">
                Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
                and start developing websites even faster with components on top of Tailwind CSS.
            </p>
        </AccordionItem>
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <p class="text-light-grey ml-36 text-sm">
                Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
                and start developing websites even faster with components on top of Tailwind CSS.
            </p>
        </AccordionItem>
        <AccordionItem class="accordion-item" defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey" activeClass="inherit bg-white border-b-0" paddingFlush="pb-0">
            <span slot="header" class="text-light-grey text-xs">09.10.2024 <span class="ml-20 text-dark-blue-green text-base">THESAURUS - Aktualisierung</span> </span>
            <p class="text-light-grey ml-36 text-sm">
                Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
                and start developing websites even faster with components on top of Tailwind CSS.
            </p>
        </AccordionItem>
    </Accordion>
</section>



<section class="bg-blue-grey pt-20 pb-40">
    <div class="grid grid-cols-3 mx-auto max-w-screen-xl"> <!-- need to remember this layout -->

        <h2 class="text-2xl col-span-3 mb-8 text-left font-bold">Services</h2> 

        <div class="grid grid-cols-3 col-span-3 justify-center items-center gap-4"> 
            <ImagePlaceholder imgOnly size='xxl' class="animate-none " />  <!-- there is a max-w-60 somewhere that constrains the size, to see if putting a real pic fixes that -->
            <ImagePlaceholder imgOnly size='xxl' class="animate-none" />
            <ImagePlaceholder imgOnly size='xxl' class="animate-none" />
        </div>

    </div>
</section>



<!-- <section class="my-40 mx-auto max-w-2xl bg-blue-grey">  -->

<style>

    * {
        height: 100%;
    }

</style>


<!-- 
// <ul>
//     {#if latestPosts.length > 0}
//         {#each latestPosts as post}
//             <li>
//                 <h3>{post.meta.title}</h3>
//                 <p>{post.meta.date}</p>
//                 <p>{post.meta.snippet}</p> 
//             </li>
//         {/each}
//     {:else}
//         <li>No posts available.</li>
//     {/if}
// </ul> -->