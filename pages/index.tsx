import type { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import FadeIn from "react-fade-in";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { Covid } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Covid>("/api/covid", fetcher);
  const [departement, setDepartement] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDepartement(data?.[0].lib_dep == e.target.value ? "" : e.target.value);
    console.log(data?.[0].lib_dep);
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
              className="bg-black dark:bg-white  px-2 py-2 placeholder:text-white text-white shadow-white dark:placeholder:text-black dark:text-black rounded-lg  shadow-md dark:shadow-neutral-900"
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

        <div className="mx-5 h-[590px] overflow-auto">
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 justify-center items-center space-y-5 lg:space-x-2 lg:overflow-auto overflow-hidden">
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">date</p>
              <span className="p-1.5 rounded-full bg-black font-bold text-white">
                {data?.[0].date}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="space-y-2 text-white">
                Nombre de patients actuellement hospitalisés pour COVID-19
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].hosp}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre cumulé de patients ayant été hospitalisés pour COVID-19
                et de retour à domicile en raison de l'amélioration de leur état
                de santé
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].rad}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de patients actuellement décédés pour COVID-19
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].dchosp}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de nouveaux patients hospitalisés au cours des dernières
                24
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].incid_hosp}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">Décès à l’hôpital</p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].incid_dchosp}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-3 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].pos}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives sur une semaine (J-3
                date de prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].pos_7j}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].conf_j1}
              </span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5 justify-between">
              <p className="text-white">
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement)
              </p>
              <span className="p-1.5 rounded-full bg-black h-9 font-bold text-white">
                {data?.[0].conf}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
