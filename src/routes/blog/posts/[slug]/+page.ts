// exports a load function that attempts to load the Markdown file corresponding to the current route.
export async function load({params}) {
    console.log("Loading post for slug:", params);
    const post = await import(`../${params.slug}.md`)
    const { title, date, categories, snippet } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date,
        categories,
        snippet,
    };
}

