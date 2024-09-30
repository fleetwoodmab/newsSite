<script>
	export let data;
</script>

<h1>Blog/News</h1>

<ul class="max-w-2xl mx-auto p-6 my-12 bg-white shadow-md rounded-lg">
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>