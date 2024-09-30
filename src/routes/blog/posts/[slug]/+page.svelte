<script>
	export let data; // gotten from +page.ts
</script>

<article class="max-w-2xl mx-auto p-6 my-12 bg-white shadow-md rounded-lg">
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />

	{#if data.categories && data.categories.length > 0}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each data.categories as category}
					<li>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>


