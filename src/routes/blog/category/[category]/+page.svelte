<script>
    export let data; // gotten from +page.ts
</script>

<h1>Posts in category: {data.category}</h1>

{#if data.posts.length > 0}
    <ul>
        {#each data.posts as post}
            <li>
                <a href="{post.path}">{post.meta.title}</a>
            </li>
        {/each}
    </ul>
{:else}
    <p>No posts found in this category.</p>
{/if}