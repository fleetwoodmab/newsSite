<script>
    import { Accordion, AccordionItem, Input } from "flowbite-svelte";
  
    let searchTerm = "";
  
    let faqItems = [
        {
            header: "Technische Belange",
            items: [
                {
                    title: "Wie erhalte ich eine Zugang?",
                    content: "this is peanut"
                },
                {
                    title: "Gibt es blabla?",
                    content: "wahoo great"
                }
            ]
        },
        {
            header: "My Header 2",
            items: [
                {
                    title: "Some FAQ Title",
                    content: "another very necessary example"
                }
            ]
        }
    ];
  
    // Filter the FAQ items based on search term
    $: filteredFaqItems = faqItems.map(section => ({
        ...section,
        items: section.items.map(item => ({
            ...item,
            matched: searchTerm.length > 1 && (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.content.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
    })).filter(section => section.items.some(item => item.matched || searchTerm.length === 0)); // Include all if searchTerm is empty
  </script>
  
  <div class="w-full max-w-4xl mx-auto mb-5 mt-3 border-grey border-4 p-8" style="clip-path: polygon(-0.11% -0.35%, 13.67% -0.74%, 13.68% 11px, 19.97% 11px, 20.08% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)">
    <Input
        id="small-input"
        type="text"
        bind:value={searchTerm}
        placeholder="FAQs durchsuchen"
        class="border p-2 rounded w-full"
    />
  
    <hr class="my-8">
  
    <Accordion flush activeClass="text-lime-green">
        {#each filteredFaqItems as section}
            <AccordionItem {...(section.items.some(item => item.matched) ? { open: true } : {})}>
                <span slot="header">{section.header}</span>
                <Accordion flush>
                    {#each section.items as item}
                        <AccordionItem {...(item.matched || searchTerm.length === 1 ? { open: true } : {})}>
                            <span slot="header" class="text-sm">{item.title}</span>
                            <p class="mb-2 text-dark-grey">{item.content}</p>
                            {#if item.content.includes('Check out this guide')}
                                <p class="text-grey">
                                    Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            {/if}
                            {#if item.content.includes('Learn more about these technologies')}
                                <ul class="list-disc ps-5 text-grey">
                                    <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline">Lorem ipsum</a></li>
                                    <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline">Tailwind UI</a></li>
                                </ul>
                            {/if}
                        </AccordionItem>
                    {/each}
                </Accordion>
            </AccordionItem>
        {/each}
    </Accordion>
  </div>
  