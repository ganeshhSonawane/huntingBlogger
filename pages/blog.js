import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";

//Server Side Rendering
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

// Static Site Generation

// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("blogdata");
//   let myFile;
//   let allBlogs = [];
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
//     allBlogs.push(JSON.parse(myFile));
//   }
//   return {
//     props: { allBlogs },
//   };
// }

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          {blogs.map((blogitem) => {
            return (
              <div className={styles.blogItem} key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p>{blogitem.caption.substr(0, 140)}...</p>
                <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Blog;
