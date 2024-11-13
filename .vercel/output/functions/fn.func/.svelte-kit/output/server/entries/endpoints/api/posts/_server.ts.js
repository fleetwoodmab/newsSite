import { j as json } from "../../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({});
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver();
      if (post && typeof post === "object" && "metadata" in post) {
        const { metadata } = post;
        const postPath = path.slice(11, -3);
        return {
          meta: metadata,
          path: postPath
        };
      }
      return {
        meta: {},
        path: ""
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return Date.parse(b.meta.date) - Date.parse(a.meta.date);
  });
  return json(sortedPosts);
};
export {
  GET
};
