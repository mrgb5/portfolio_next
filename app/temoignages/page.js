"use client";

import tem1 from "../assets/images/1.png";
import tem2 from "../assets/images/2.png";
import tem3 from "../assets/images/3.png";
import Style from "./temoignages.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const Temoignages = () => {
  const temoignages = useSelector((state) => state.temoignage.temoignages);
  return (
    <div className={Style.temoignages}>
      <h1>Liste des témoignages</h1>
      <div className={Style.temoignages_liste}>
        {temoignages &&
          temoignages.map((temoignage, index) => (
            <div key={index}>
              <Image
                src={temoignage.pic}
                width={100}
                height={100}
                alt="Jean paul"
              />
              <h3>{temoignage.nom}</h3>
              <p>{temoignage.message}</p>
            </div>
          ))}
      </div>
      <Link href={"/laissertemoignage"}>Laisser un Temoignage</Link>
    </div>
  );
};

export default Temoignages;
