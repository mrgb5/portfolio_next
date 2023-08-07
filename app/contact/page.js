"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  // Regex pour les validations
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

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
    const { name, value, checked, type } = event.target;
    setState((previouState) => ({
      ...previouState,
      [name]: type === "checkbox" ? checked : value,
    }));
    validateField(name, value);
  }

  function validateField(field, value) {
    switch (field) {
      case "prenom":
      case "nom":
        if (!nomRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            [field]: `Veuillez entrer un ${field} valide`,
          }));
        else setErrors((prev) => ({ ...prev, [field]: "" }));
        break;
      case "email":
        if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            [field]: `Veuillez entrer un ${field} valide`,
          }));
        else setErrors((prev) => ({ ...prev, [field]: "" }));
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
      console.log("Données envoyées", state);
      navigate("/");
    }
  }

  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div>
        <form className={styles.form} onSubmit={submit}>
          <div>
            <label>Prenom</label>
            <input
              onChange={handleChange}
              type="text"
              className={
                styles.input
                // + fieldHasError("prenom") ? " feedback-input " : ""
              }
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
              className={
                styles.input
                // fieldHasError("nom") ? "feedback-input input" : " input"
              }
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
              className={
                styles.input
                // fieldHasError("email") ? "feedback-input" : ""}
              } 
              name="email"
              id="email"
              placeholder="Entrer votre email"
            />
            {fieldHasError("email") && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div>
            <label>Votre message</label>
            <textarea
              className={styles.textarea}
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

export default Contact;
