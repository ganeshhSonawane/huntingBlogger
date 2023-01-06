import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

//Server Side Rendering
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myblog = await data.json();
  return {
    props: { myblog },
  };
}

//Static Site Generation

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "javascript" } },
//       { params: { slug: "layout-shift" } },
//       { params: { slug: "next-js" } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
//   return {
//     props: { myblog: JSON.parse(myblog) },
//   };
// }

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myblog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <p className={styles.authorname}>{blog && blog.author}</p>
        <hr />
        {blog && (
          <div
            className={styles.blogpost}
            dangerouslySetInnerHTML={createMarkup(blog.content)}
          ></div>
        )}
      </main>
    </div>
  );
};

export default Slug;
