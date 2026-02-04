import { visit } from "unist-util-visit";

/**
 * Prefixe absolute interne Links:
 *  /foo  ->  /CineMap-Trier/foo
 * Lässt in Ruhe: http(s), mailto:, #anker, //cdn...
 */
export default function remarkPrefixBase({ base = "/" } = {}) {
  const cleanBase = base.endsWith("/") ? base : base + "/";

  const shouldRewrite = (url) =>
    typeof url === "string" &&
    url.startsWith("/") &&
    !url.startsWith("//");

  const rewrite = (url) =>
    cleanBase.replace(/\/+$/, "/") + url.replace(/^\/+/, "");

  return (tree) => {
    visit(tree, (node) => {
      // Markdown Links: [Text](/path)
      if (node.type === "link" && shouldRewrite(node.url)) {
        node.url = rewrite(node.url);
      }

      // Markdown Images: ![](/img.png)
      if (node.type === "image" && shouldRewrite(node.url)) {
        node.url = rewrite(node.url);
      }
    });
  };
}
