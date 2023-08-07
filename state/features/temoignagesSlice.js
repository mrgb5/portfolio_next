import { createSlice } from "@reduxjs/toolkit";

const temoignages = [
  {
    pic: "/images/1.png",
    nom: "Jean Paul",
    message: `J'ai eu le privilège de travailler avec Gabin sur un projet
            complexe de développement d'une application web. Son expertise
            technique et sa capacité à résoudre rapidement les problèmes ont été
            impressionnantes. Il a démontré une grande compétence dans la
            création d'architectures logicielles solides et évolutives. Son
            engagement et sa passion pour son travail se reflètent dans la
            qualité du code qu'il produit. Grâce à son implication, nous avons
            pu livrer le projet dans les délais et atteindre nos objectifs. Je
            recommande vivement Gabin pour tout projet de développement
            logiciel.`,
  },
  {
    pic: "/images/2.png",
    nom: "Christ Paul",
    message: `Gabin Junior est un développeur extrêmement talentueux et
            polyvalent. J'ai eu l'occasion de collaborer avec lui sur plusieurs
            projets, et à chaque fois, il a su apporter une réelle valeur
            ajoutée. Sa connaissance approfondie des langages de programmation
            et des technologies modernes lui permet d'aborder les défis
            techniques avec confiance. De plus, il est doté d'un excellent
            esprit d'équipe et sait travailler efficacement avec les autres
            membres de l'équipe. Son professionnalisme et son attitude positive
            font de lui un atout précieux pour toute entreprise.`,
  },
  {
    pic: "/images/3.png",
    nom: "John PDoe",
    message: `Je suis très reconnaissant d'avoir pu travailler avec Gabin Junior
            Kounchou sur un projet de développement d'une application mobile.
            Son expertise en développement d'applications pour les plateformes
            iOS et Android a été remarquable. Il a fait preuve d'une grande
            créativité dans la conception d'interfaces utilisateur intuitives et
            attractives, tout en maintenant des performances optimales. Son
            attention aux détails et sa rigueur ont permis de produire un code
            propre et bien structuré. Gabin Junior est un développeur passionné
            et dévoué, toujours prêt à relever de nouveaux défis. Je le
            recommande vivement pour tout projet de développement d'applications
            mobiles.`,
  },
];

const temoignageSlice = createSlice({
  name: "temoignage",
  initialState: {
    temoignages,
  },
  reducers: {
    added: (state, action) => {
      state.temoignages.push(action.payload);
    },
  },
});

export const temoignageSliceActions = temoignageSlice.actions;

export default temoignageSlice.reducer;
