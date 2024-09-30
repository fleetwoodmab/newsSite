<script>
    export let categories = ["numbers", "odd", "even"]; // Ensure this is an array
</script>

<h1>Categories/Projects</h1>

<ul>
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
