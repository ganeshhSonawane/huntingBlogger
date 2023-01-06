import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About us</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
