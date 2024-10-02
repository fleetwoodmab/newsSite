<script lang="ts">
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
</script>

<section class="">
    <div class="flex justify-center items-center mt-20 px-6"> 
        <div class="flex w-full max-w-4xl"> 
            <img src="pic.png" alt="" class="h-auto">
            <div class="flex-grow ml-8">
                <h1 class="text-2xl mb-4">Geoinformation</h1>
                <p class="text-sm">GeoSphere Austria, die neu gegründete Bundesanstalt für Geologie, Geophysik, Klimatologie und Meteorologie, liefert wichtige Grundlagen zu den großen Herausforderungen unserer Gesellschaft. Eine wichtige Grundlage ist die systematische und nachhaltige Verarbeitung und Bereitstellung der Daten. Das Department für Geoinformation trägt zur Erfüllung dieser Aufgabe mit diesen Services bei.</p>
            </div>
        </div>
    </div>    
</section>

<section class="p-5 max-w-2xl mx-auto my-40">
    <h2>News</h2>
    <Accordion>
        <AccordionItem>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
            and start developing websites even faster with components on top of Tailwind CSS.
        </p>
        </AccordionItem>
        <AccordionItem>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li>
            <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
            </li>
            <li>
            <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
            </li>
        </ul>
        </AccordionItem>
    </Accordion>
</section>


<section class="grid grid-cols-3 justify-stretch justify-items-center bg-blue-grey pt-20 pb-40"> 
    <h2 class="text-lg ">Services</h2>
    <div class="grid grid-cols-3 justify-center items-center gap-2">
        <div><ImagePlaceholder imgOnly class="mt-8  animate-none" /></div>
        <div><ImagePlaceholder imgOnly class="mt-8  animate-none" /></div>
        <div><ImagePlaceholder imgOnly class="mt-8  animate-none" /></div>
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