import Image from "next/image";
import Calculatrice from "../assets/images/calculator.webp";
import styles from "./projects.module.css";

const Project1 = () => {
  return (
    <div className={styles.projects}>
      <h1> Calculatrice </h1>
      <Image src={Calculatrice} alt="Calculatrice" />
      <p>
        {" "}
        À l'école nous avons lancer un project sur le language c# pour créer une
        calculatrice
      </p>
      <p>
        Ce projet de calculatrice avec interface en C# est une démonstration de
        mes compétences en développement logiciel et en programmation orientée
        objet. J'ai créé cette application à l'aide de Visual Studio, en
        utilisant le langage de programmation C# et les fonctionnalités de
        l'interface graphique Windows Forms.
      </p>
      <p>
        Cette calculatrice offre une interface conviviale et intuitive,
        permettant aux utilisateurs d'effectuer des opérations mathématiques de
        base telles que l'addition, la soustraction, la multiplication et la
        division. J'ai implémenté des boutons pour chaque opération, ainsi qu'un
        écran d'affichage pour afficher les chiffres entrés et le résultat des
        calculs.
      </p>
      <p>
        Pour garantir la fonctionnalité et la précision des calculs, j'ai
        utilisé des méthodes et des algorithmes appropriés dans mon code. J'ai
        également inclus des validations pour éviter les erreurs de saisie et
        fournir une expérience utilisateur fluide.
      </p>
      <p>
        L'une des caractéristiques clés de cette calculatrice est sa capacité à
        gérer les opérations en chaîne. Les utilisateurs peuvent effectuer
        plusieurs calculs successifs sans avoir à effacer les résultats
        précédents. Cela offre une grande flexibilité et facilite les calculs
        complexes.
      </p>
      <p>
        En plus de la fonctionnalité principale de calcul, j'ai ajouté des
        fonctionnalités supplémentaires pour améliorer l'expérience utilisateur,
        telles que la possibilité de réinitialiser les calculs, d'effacer les
        chiffres un par un et de gérer les nombres décimaux.
      </p>
      <p>
        Ce projet démontre ma capacité à concevoir et à développer des
        applications avec une interface utilisateur attrayante et fonctionnelle
        en utilisant C# et Windows Forms. Il met en évidence ma compréhension
        des concepts de programmation orientée objet, ma rigueur dans l'écriture
        de code propre et ma capacité à résoudre les problèmes techniques.
      </p>
      <p>
        La calculatrice avec interface en C# est un ajout solide à mon
        portfolio, illustrant ma maîtrise du développement logiciel et mon
        engagement à fournir des solutions de qualité.
      </p>
      <div className={styles.competences}>
        <h2> Compétences</h2>
        <ul className={styles.competences_list}>
          <li>Base de donnée</li>
          <li>SQL</li>
          <li>C#</li>
          <li>MySQL</li>
          <li>Design</li>
          <li>Communication</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
