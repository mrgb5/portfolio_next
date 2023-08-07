import Image from 'next/image';
import Pic from "../assets/images/images.jpg";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";

const Accueil = () => {

  const router = useRouter();
  function goToContact(){
    router.push('/contact')
  }

  return (
    <div className={styles}>

      <div className={styles.hero_container}>
        <div className={styles.hero}>
          <span>Je m'appelle</span>
          <h1 className={styles.nom}>
            Gabin Junior Kounchou
            <br />
            <span>Je suis développeur web</span>
          </h1>
          <p>
            Passionné par la programmation informatique, Kounchou Gabin Junior,
            surnommé "Kroiesma", a gravi les échelons académiques avec
            détermination. Originaire du Cameroun, où il a obtenu son
            baccalauréat en sciences, il a migré vers le Canada pour poursuivre
            son rêve professionnel.
          </p>
          <button onClick={goToContact}>Contactez-Moi</button>
        </div>
      </div>
      <div className={styles.apropos}>
      <Image className={styles.images} src={Pic} alt="Gabin Junior Kounchou" />
        <div>
          <h2>À propos</h2>
          <div>
            <p>
              À la Cité Collégiale, Junior a brillamment décroché son Diplôme
              d'Études Collégiales (DEC) en programmation informatique. Ce
              parcours académique solide, conjugué à sa persévérance et à son
              esprit novateur, l'a placé sur la voie de l'excellence.
            </p>

            <p>
              Doté d'une formation internationale, Gabin maîtrise les outils et
              techniques les plus récents en programmation informatique. Il a
              également démontré sa capacité à résoudre des problèmes complexes
              et à s'adapter à des environnements de travail dynamiques.
            </p>

            <p>
              La touche personnelle de Junior réside dans son approche unique,
              où rigueur et créativité se rejoignent. Il est déterminé à
              apporter des solutions innovantes et performantes à tout défi
              technologique qui se présente à lui. Cette volonté de toujours
              viser plus haut fait de lui une valeur sûre dans l'industrie
              technologique.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.competences}>
        <h2> Compétences</h2>
        <ul className={styles.competences_list}>
          <li>Cryptomonnaie</li>
          <li>Base de donnée</li>
          <li>Java</li>
          <li>C#</li>
          <li>Design</li>
          <li>Node.js</li>
          <li>React</li>
          <li>MySQL</li>
          <li>Linux</li>
        </ul>
      </div>

      <div className={styles.formations}>
        <h2>Formations</h2>

        <p>
          Formation en Édition de Site Web, Optimisation SEO et WordPress -
          Développement de compétences en conception, édition et optimisation
          SEO de sites web. Maîtrise de la création et gestion de sites
          WordPress et personnalisation de thèmes.
        </p>
        <p>
          Formation en Marketing Digital et YouTube, 2021 - Acquisition de
          compétences en stratégie de marketing numérique, gestion des médias
          sociaux, analyse de données, création de contenu pour YouTube, montage
          vidéo et optimisation SEO pour YouTube.
        </p>
        <p>
          Diplôme d'Études Collégiales (DEC), Programmation Informatique, La
          Cité Collégiale, Canada (2022-2023) - Spécialisation en conception
          d'applications en utilisant divers langages de programmation tels que
          Java, C#, Visual Basic, COBOL. Élaboration d'applications graphiques
          autonomes et d'applications Internet. Expérience pratique avec les
          bases de données Access, Microsoft SQL Server et MySQL. Formation
          enrichie par de nombreux travaux pratiques effectués sur le matériel
          informatique du collège.
        </p>
        <p>
          Baccalauréat en Sciences, Collège Sabaya, Cameroun (2011-2018) -
          Sciences, analyse de données, représentant de classe.
        </p>
      </div>
    </div>
  );
};

export default Accueil;
