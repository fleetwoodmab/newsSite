<script>
    import { Accordion, AccordionItem, Input } from "flowbite-svelte";
  
    let searchTerm = "";
  
    let faqItems = [
        {
            header: "Technische Belange",
            items: [
                {
                    title: "Wie erhalte ich eine Zugang?",
                    content: "Iste perferendis facere sit ut magni et. Et aliquid quia fugit et dolorum eos fugit et. Dolore iste tempora minus iusto suscipit ducimus sed tempore. Et aliquam quibusdam quo inventore et et blanditiis cupiditate. Voluptate magni consequatur atque totam itaque mollitia consectetur voluptatem. Architecto dolorem voluptas pariatur. Nihil tenetur et culpa sunt ipsa inventore."
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
  
  <div class="w-full max-w-4xl mx-auto mb-5 border-grey border-4 p-8 top-3 relative" style="clip-path: polygon(-0.11% -0.35%, 13.67% -0.74%, 13.68% 11px, 19.97% 11px, 20.08% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)">
    <Input
        id="small-input"
        type="text"
        bind:value={searchTerm}
        placeholder="FAQs durchsuchen"
        class="border p-2 rounded w-full text-xs text-light-grey focus:ring-0 focus:border-gray-300 bg-white rounded-r-none border-r-0"
    />
  
    <hr class="mt-4">
  
    <Accordion flush activeClass="text-lime-green">
        {#each filteredFaqItems as section}
            <AccordionItem class="text-xs font-bold" {...(section.items.some(item => item.matched) ? { open: true } : {})}>
                <span slot="header" class="pl-1">{section.header}</span>
                <Accordion flush class="mt-[-10px] pl-3">
                    {#each section.items as item}
                        <AccordionItem class="py-4" {...(item.matched || searchTerm.length === 1 ? { open: true } : {})}>
                            <span slot="header" class="text-xs hover:text-teal">{item.title}</span>
                            <p class="mb-2 font-light pl-3 text-xs">{item.content}</p>
                            {#if item.content.includes('Check out this guide')}
                                <p class="text-grey">
                                    Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            {/if}
                            {#if item.content.includes('Learn more about these technologies')}
                                <ul class="list-disc ps-5 text-grey">
                                    <li>bla</li>
                                    <li>Tailwind UI</li>
                                </ul>
                            {/if}
                        </AccordionItem>
                    {/each}
                </Accordion>
            </AccordionItem>
        {/each}
    </Accordion>
  </div>
  