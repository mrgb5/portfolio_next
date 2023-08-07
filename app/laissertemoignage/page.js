"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { temoignageSliceActions } from "@/state/features/temoignagesSlice";

const LaisserTemoignage = () => {
  // Regex pour les validations
  const dispatch = useDispatch();
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const router = useRouter();
  const [state, setState] = useState({
    prenom: "",
    nom: "",
    email: "",
    commentaire: "",
  });

  const [errors, setErrors] = useState({
    prenom: "",
    nom: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((previousState) => ({ ...previousState, [name]: value }));
    validateField(name, value);
  }

  function validateField(field, value) {
    switch (field) {
      case "prenom":
      case "nom":
        if (!nomRegex.test(value))
          setErrors((previous) => ({
            ...previous,
            [field]: `Veuillez entrer un ${field} valide`,
          }));
        else setErrors((previous) => ({ ...previous, [field]: "" }));
        break;
      case "email":
        if (!emailRegex.test(value))
          setErrors((previous) => ({
            ...previous,
            [field]: `Veuillez entrer un ${field} valide`,
          }));
        else setErrors((previous) => ({ ...previous, [field]: "" }));
        break;
      default:
        break;
    }
  }

  function fieldHasError(field) {
    return errors[field] && errors[field] !== "";
  }

  function isFormValid() {
    const isValid =
      nomRegex.test(state.nom) &&
      nomRegex.test(state.prenom) &&
      emailRegex.test(state.email);
    if (!isValid) {
      Object.keys(state).forEach((field) => {
        if (field !== "commentaire") {
          validateField(field, state[field]);
        }
      });
    }
    return isValid;
  }

  function submit(event) {
    event.preventDefault();
    if (isFormValid()) {
      // Soumettre le formulaire et rediriger vers la page d'accueil
      const formatedState = {
        nom: `${state.prenom} ${state.nom}`,
        message: state.commentaire,
        pic: "/images/default.png",
      };
      // console.log("Données envoyées", formatedState);
      dispatch(temoignageSliceActions.added(formatedState));
      router.push("/temoignages");
    }
  }

  return (
    <div className={styles.contact}>
      <h1>Laisser un témoignage</h1>
      <div>
        <form onSubmit={submit}>
          <div>
            <label>Prénom</label>
            <input
              onChange={handleChange}
              type="text"
              className={fieldHasError("prenom") ? "feedback-input" : ""}
              name="prenom"
              id="prenom"
              placeholder="Entrer votre prénom"
            />
            {fieldHasError("prenom") && (
              <div className="invalid-feedback">{errors.prenom}</div>
            )}
          </div>
          <div>
            <label>Nom</label>
            <input
              onChange={handleChange}
              type="text"
              className={fieldHasError("nom") ? "feedback-input" : ""}
              name="nom"
              id="nom"
              placeholder="Entrer votre nom"
            />
            {fieldHasError("nom") && (
              <div className="invalid-feedback">{errors.nom}</div>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              onChange={handleChange}
              type="text"
              className={fieldHasError("email") ? "feedback-input" : ""}
              name="email"
              id="email"
              placeholder="Entrer votre email"
            />
            {fieldHasError("email") && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div>
            <label>Laisser un témoignage</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="commentaire"
              id="commentaire"
              placeholder="Entrer votre commentaire"
            />
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default LaisserTemoignage;
