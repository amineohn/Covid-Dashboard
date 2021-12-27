import type { NextPage } from "next";
import React, { FormEvent, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { Covid } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Covid>("/api/covid", fetcher);
  const [departement, setDepartement] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /*useEffect(() => {
    switch (data?.[0].lib_dep) {
      case "Ain":
        setDepartement("01");
        break;
      case "Aisne":
        setDepartement("02");
        break;
      case "Allier":
        setDepartement("03");
        break;
      case "Alpes-de-Haute-Provence":
        setDepartement("04");
        break;
      case "Hautes-Alpes":
        setDepartement("05");
        break;
      case "Alpes-Maritimes":
        setDepartement("06");
        break;
      case "Ardèche":
        setDepartement("07");
        break;
      case "Ardennes":
        setDepartement("08");
        break;
      case "Ariège":
        setDepartement("09");
        break;
      case "Aube":
        setDepartement("10");
        break;
      case "Aude":
        setDepartement("11");
        break;
      case "Aveyron":
        setDepartement("12");
        break;
      case "Bouches-du-Rhône":
        setDepartement("13");
        break;
      case "Calvados":
        setDepartement("14");
        break;
      case "Cantal":
        setDepartement("15");
        break;
      case "Charente":
        setDepartement("16");
        break;
      case "Charente-Maritime":
        setDepartement("17");
        break;
      case "Cher":
        setDepartement("18");
        break;
      case "Corrèze":
        setDepartement("19");
        break;
      case "Corse-du-Sud":
        setDepartement("2A");
        break;
      case "Haute-Corse":
        setDepartement("2B");
        break;
      case "Côte-d'Or":
        setDepartement("21");
        break;
      case "Côtes-d'Armor":
        setDepartement("22");
        break;
      case "Creuse":
        setDepartement("23");
        break;
      case "Dordogne":
        setDepartement("24");
        break;
      case "Doubs":
        setDepartement("25");
        break;
      case "Drôme":
        setDepartement("26");
        break;
      case "Eure":
        setDepartement("27");
        break;
      case "Eure-et-Loir":
        setDepartement("28");
        break;
      case "Finistère":
        setDepartement("29");
        break;
      case "Gard":
        setDepartement("30");
        break;
      case "Haute-Garonne":
        setDepartement("31");
        break;
      case "Gers":
        setDepartement("32");
        break;
      case "Gironde":
        setDepartement("33");
        break;
      case "Hérault":
        setDepartement("34");
        break;
      case "Ille-et-Vilaine":
        setDepartement("35");
        break;
      case "Indre":
        setDepartement("36");
        break;
      case "Indre-et-Loire":
        setDepartement("37");
        break;
      case "Isère":
        setDepartement("38");
        break;
      case "Jura":
        setDepartement("39");
        break;
      case "Landes":
        setDepartement("40");
        break;
      case "Loir-et-Cher":
        setDepartement("41");
        break;
      case "Loire":
        setDepartement("42");
        break;
      case "Haute-Loire":
        setDepartement("43");
        break;
      case "Loire-Atlantique":
        setDepartement("44");
        break;
      case "Loiret":
        setDepartement("45");
        break;
      case "Lot":
        setDepartement("46");
        break;
      case "Lot-et-Garonne":
        setDepartement("47");
        break;
      case "Lozère":
        setDepartement("48");
        break;
      case "Maine-et-Loire":
        setDepartement("49");
        break;
      case "Manche":
        setDepartement("50");
        break;
      case "Marne":
        setDepartement("51");
        break;
      case "Haute-Marne":
        setDepartement("52");
        break;
      case "Mayenne":
        setDepartement("53");
        break;
      case "Meurthe-et-Moselle":
        setDepartement("54");
        break;
      case "Meuse":
        setDepartement("55");
        break;
      case "Morbihan":
        setDepartement("56");
        break;
      case "Moselle":
        setDepartement("57");
        break;
      case "Nièvre":
        setDepartement("58");
        break;
      case "Nord":
        setDepartement("59");
        break;
      case "Oise":
        setDepartement("60");
        break;
      case "Orne":
        setDepartement("61");
        break;
      case "Pas-de-Calais":
        setDepartement("62");
        break;
      case "Puy-de-Dôme":
        setDepartement("63");
        break;
      case "Pyrénées-Atlantiques":
        setDepartement("64");
        break;
      case "Hautes-Pyrénées":
        setDepartement("65");
        break;
      case "Pyrénées-Orientales":
        setDepartement("66");
        break;
      case "Bas-Rhin":
        setDepartement("67");
        break;
      case "Haut-Rhin":
        setDepartement("68");
        break;
      case "Rhône":
        setDepartement("69");
        break;
      case "Haute-Saône":
        setDepartement("70");
        break;
      case "Saône-et-Loire":
        setDepartement("71");
        break;
      case "Sarthe":
        setDepartement("72");
        break;
      case "Savoie":
        setDepartement("73");
        break;
      case "Haute-Savoie":
        setDepartement("74");
        break;
      case "Paris":
        setDepartement("75");
        break;
      case "Seine-Maritime":
        setDepartement("76");
        break;
      case "Seine-et-Marne":
        setDepartement("77");
        break;
      case "Yvelines":
        setDepartement("78");
        break;
      case "Deux-Sèvres":
        setDepartement("79");
        break;
      case "Somme":
        setDepartement("80");
        break;
      case "Tarn":
        setDepartement("81");
        break;
      case "Tarn-et-Garonne":
        setDepartement("82");
        break;
      case "Var":
        setDepartement("83");
        break;
      case "Vaucluse":
        setDepartement("84");
        break;
      case "Vendée":
        setDepartement("85");
        break;
      case "Vienne":
        setDepartement("86");
        break;
      case "Haute-Vienne":
        setDepartement("87");
        break;
      case "Vosges":
        setDepartement("88");
        break;
      case "Yonne":
        setDepartement("89");
        break;
      case "Territoire de Belfort":
        setDepartement("90");
        break;
      case "Essonne":
        setDepartement("91");
        break;
      case "Hauts-de-Seine":
        setDepartement("92");
        break;
      case "Seine-Saint-Denis":
        setDepartement("93");
        break;
      case "Val-de-Marne":
        setDepartement("94");
        break;
      case "Val-d'Oise":
        setDepartement("95");
        break;
      default:
        setDepartement("");
    }
  });*/
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data?.[0].lib_dep === departement) {
      setSuccess(`Le département ${departement} est en cours de traitement.`);
      setDepartement(departement === data?.[0].lib_dep ? "" : departement);
      setError("");
    } else {
      setError(
        `Le département ${departement} n'est pas en cours de traitement.`
      );
      setSuccess("");
    }
    if (departement == "") {
      setError("Aucun département n'a été sélectionné");
      setInterval(() => {
        setError("");
      }, 3000);
    }
    if (departement != "") {
      setError("");
      setSuccess("Le département a été sélectionné");
      setInterval(() => {
        setSuccess("");
      }, 3000);
    }
  };
  return (
    <>
      <FadeIn className="space-y-5">
        {error && (
          <FadeIn className="flex justify-center items-center space-y-2">
            <div className="bg-red-500 text-white font-medium rounded-lg px-4 py-2">
              {error}
            </div>
          </FadeIn>
        )}
        {success && (
          <FadeIn className="flex justify-center items-center space-y-2">
            <div className="bg-green-500 text-white font-medium rounded-lg px-4 py-2">
              {success}
            </div>
          </FadeIn>
        )}
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex justify-center"
        >
          <div className="space-x-2">
            <input
              type="text"
              placeholder="Entrez un département"
              value={departement}
              className="bg-black dark:bg-white px-2 py-2 placeholder:text-white text-white shadow-white dark:placeholder:text-black dark:text-black rounded-lg  shadow-md dark:shadow-neutral-900"
              onChange={(e) => setDepartement(e.target.value)}
            />
            <button
              type="submit"
              className="bg-neutral-100 dark:bg-lime-100 bg-opacity-50 dark:bg-opacity-10 hover:bg-opacity-50 dark:hover:bg-opacity-20 transition px-2 py-2 rounded-lg"
            >
              Valider
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <p className="bg-black px-2 py-2 rounded-lg">
            {data?.[0].lib_dep ? "" : "..."} - {departement}
          </p>
        </div>

        <div className="mx-5 h-[590px] overflow-auto">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 justify-center items-center space-y-5 lg:space-x-2 lg:overflow-auto overflow-hidden">
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">date</p>
              <span className="p-1.5 rounded-full bg-black font-bold text-white">
                {data?.[0].date ? data?.[0].date : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="space-y-2 text-white">
                Nombre de patients actuellement hospitalisés pour COVID-19
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].hosp ? data?.[0].hosp : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre cumulé de patients ayant été hospitalisés pour COVID-19
                et de retour à domicile en raison de l'amélioration de leur état
                de santé
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].rad ? data?.[0].rad : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de patients actuellement décédés pour COVID-19
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].dchosp ? data?.[0].dchosp : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de nouveaux patients hospitalisés au cours des dernières
                24
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].incid_hosp ? data?.[0].incid_hosp : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">Décès à l’hôpital</p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].incid_dchosp ? data?.[0].incid_dchosp : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-3 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].pos ? data?.[0].pos : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives sur une semaine (J-3
                date de prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].pos_7j ? data?.[0].pos_7j : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].conf_j1 ? data?.[0].conf_j1 : "..."}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].conf ? data?.[0].conf : "..."}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
