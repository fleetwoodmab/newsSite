export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post: { meta: { categories: string | any[]; }; }) => post.meta.categories.includes(category));

	return {
		category,
		posts
	};
};

/*
Wrap that code in a try/catch block, 
to anticipate situations where no posts will match the given category, 
and handle that properly in the UI. 
(An {#if posts.length} block with an {:else} should do the trick.)
*/ 

