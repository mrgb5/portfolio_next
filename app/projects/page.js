"use client";

import Calculatrice from "../assets/images/calculator.webp";
import MaxFit from "../assets/images/maxfit.png";
import styles from "./projects.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <main>
      <div className={styles.projects}>
        <h1>Liste de mes projets</h1>
        <p>
          Voici la liste de mes projets déjà réalisés par moi ou avec mon équipe
        </p>
        <div className={styles.projects_list}>
          <section>
            <h2> Calculatrice </h2>
            <Image
              className={styles.image1}
              src={Calculatrice}
              alt="Calculatrice"
            />
            <p>
              {" "}
              Ce projet de calculatrice avec interface en C# est une
              démonstration de mes compétences en développement logiciel et en
              programmation orientée objet. J'ai créé cette application à l'aide
              de Visual Studio, en utilisant le langage de programmation C# et
              les fonctionnalités de l'interface graphique Windows Forms.
            </p>
            <Link href={"/project1"} className={styles.button}>
              En savoir plus
            </Link>
          </section>
          <section>
            <h2>MaxFit</h2>
            <Image className={styles.image2} src={MaxFit} alt="MaxFit" />
            <p>
              MaxFit est un projet axé sur la santé et la remise en forme qui
              vise à aider les individus à atteindre leurs objectifs de
              condition physique et de bien-être. MaxFit propose une approche
              holistique en combinant des programmes d'entraînement
              personnalisés, des conseils nutritionnels adaptés et un suivi
              régulier pour garantir des résultats optimaux.
            </p>
            <Link href={"/project2"} className={styles.button}>
              En savoir plus
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;
