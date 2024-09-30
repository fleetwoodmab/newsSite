<script lang="ts">
    import { AccordionItem, Accordion } from 'flowbite-svelte';
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

<section class="p-5 max-w-2xl mx-auto mt-20">
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

<!-- Cool Table


<section class="bg-gray-100 p-5">
    <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow rounded-md overflow-hidden">
        <div class="p-4 text-lg font-bold bg-gray-200">
            News
        </div>
        <div class="divide-y">
            <div class="p-4 cursor-pointer flex justify-between items-center" on:click={() => toggleCollapse('content1')}>
                <span>9.8.2024</span>
                <span>THESAURUS - Aktualisierung</span>
            </div>
            <div class="p-4 cursor-pointer flex justify-between items-center" on:click={() => toggleCollapse('content2')}>
            <span>4.8.1024</span>
            <span>TETHYS - neue Release</span>
            </div>
            <div class="p-4 cursor-pointer flex justify-between items-center" on:click={() => toggleCollapse('content3')}>
            <span>3.6.2024</span>
            <span>TETHYS - Übersiedlung auf neue Domäne</span>
            <span class="ml-2">▼</span>
            </div>
            <div id="content3" class="hidden transition-height overflow-hidden p-4 bg-gray-50">
            <p>
                Für das Herunterladen von Raster- und Stationsdaten steht, neben dem Download-Formular, eine API zur Verfügung.
                Die Dokumentation zur API finden Sie unter 
                <a href="https://dataset.api.hub" class="text-blue-500 underline">https://dataset.api.hub</a>.
            </p>
            </div>
            <div class="p-4 cursor-pointer flex justify-between items-center" on:click={() => toggleCollapse('content4')}>
            <span>7.5.2024</span>
            <span>TETHYS - Datenzugriff via API</span>
            </div>
        </div>
        </div>
    </div>
    </section>

-->


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