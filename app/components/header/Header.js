"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import github from "../../assets/images/github-mark-white.png";

const Header = () => {
  const [submenuHidden, setSubmenuHidden] = useState(false);
  return (
    <nav className={styles.header}>
      <div className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li
            onMouseEnter={() => setSubmenuHidden(true)}
            onMouseLeave={() => setSubmenuHidden(false)}
            className={styles.submenu_container}
          >
            <Link href="/projects">Projets</Link>
            <ul className={submenuHidden ? styles.submenu : styles.hide}>
              <li>
                <Link href="/project1">Projet 1</Link>
              </li>
              <li>
                <Link href="/project2">Projet 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/temoignages">Témoignages</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* <Link href={""} */}
        <Link href={"https://github.com/mrgb5"}>
          <Image
            className={styles.image}
            src={github}
            alt="github"
            width={500}
            height={500}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
