import Image from "next/image";
import MaxFit from "../assets/images/maxfit.png";
import styles from "./projects.module.css";

const Project2 = () => {
  return (
    <div className={styles.projects}>
      <h1>MaxFit</h1>
      <Image src={MaxFit} alt="MaxFit" />
      <p>
        MaxFit est un projet axé sur la santé et la remise en forme qui vise à
        aider les individus à atteindre leurs objectifs de condition physique et
        de bien-être. MaxFit propose une approche holistique en combinant des
        programmes d'entraînement personnalisés, des conseils nutritionnels
        adaptés et un suivi régulier pour garantir des résultats optimaux.
      </p>
      <p>
        L'objectif principal de MaxFit est de permettre aux personnes de vivre
        une vie saine et active en adoptant des habitudes de vie équilibrées. Le
        projet offre une gamme de services, notamment des programmes
        d'entraînement sur mesure en fonction des objectifs individuels, des
        conseils d'experts en nutrition pour aider à maintenir une alimentation
        équilibrée, et un suivi régulier pour ajuster et adapter les programmes
        en fonction de la progression de chaque individu.
      </p>
      <p>
        En utilisant des technologies avancées et des outils de suivi, MaxFit
        fournit une plateforme conviviale et intuitive pour permettre aux
        utilisateurs de suivre leur progression, d'enregistrer leurs
        entraînements et leurs repas, et d'accéder à des ressources
        complémentaires telles que des conseils et des informations sur la santé
        et le fitness.
      </p>
      <p>
        MaxFit vise à créer une communauté de personnes motivées et engagées
        dans leur parcours de remise en forme, en favorisant l'interaction et le
        soutien entre les membres. L'objectif ultime est d'inspirer et
        d'accompagner les individus vers une meilleure santé, une forme physique
        optimale et un bien-être général.
      </p>
      <div className={styles.competences}>
        <h2> Compétences</h2>
        <ul className={styles.competences_list}>
          <li>Base de donnée</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Project2;
