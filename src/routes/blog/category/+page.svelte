<script>
    export let categories = ["numbers", "odd", "even"]; // Ensure this is an array
</script>

<h1>Categories/Projects</h1>

<ul class="max-w-2xl mx-auto p-6 my-12 bg-white shadow-md rounded-lg">
    {#each categories as category}
        <li>
            <a href="/blog/category/{category}">
                {category}
            </a>
        </li>
    {/each}
</ul>

{#if categories.length === 0}
    <p>No categories found.</p>
{/if}
