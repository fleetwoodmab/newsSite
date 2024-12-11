export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = await resolver(); // post is initially of type 'unknown'

			if (post && typeof post === 'object' && 'metadata' in post) {
				const { metadata } = post as { metadata: any }; // type assertion
				const postPath = path.slice(11, -3); // that is to say from /src/routes/ to /.md 

				return {
					meta: metadata,
					path: postPath
				};
			}

			// return empty post if metadata does not exist
			return {
				meta: {},
				path: ''
			};
		})
	);

	return allPosts;
};


