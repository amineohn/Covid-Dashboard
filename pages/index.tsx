import type { NextPage } from "next";
import React from "react";
import FadeIn from "react-fade-in";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { Covid } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Covid>("/api/covid", fetcher);
  return (
    <>
      <FadeIn>
        <div className="mx-5">
          <div className=" grid grid-cols-1 md:grid-cols-6 justify-center items-center space-y-5 lg:space-x-2 lg:overflow-auto overflow-hidden">
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900 inline-flex space-x-1 mt-0.5">
              <p>date:</p>
              <span>{data?.[0].date}</span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p className="space-y-2">
                Nombre de patients actuellement hospitalisés pour COVID-19:
              </p>
              <span>{data?.[0].hosp}</span>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre cumulé de patients ayant été hospitalisés pour COVID-19
                et de retour à domicile en raison de l'amélioration de leur état
                de santé:
                {data?.[0].rad}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de patients actuellement décédés pour COVID-19:
                {data?.[0].dchosp}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de nouveaux patients hospitalisés au cours des dernières
                24:
                {data?.[0].incid_hosp}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Décès à l’hôpital:
                {data?.[0].incid_dchosp}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de personnes déclarées positives (J-3 date de
                prélèvement):
                {data?.[0].pos}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de personnes déclarées positives sur une semaine (J-3
                date de prélèvement):
                {data?.[0].pos_7j}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement):
                {data?.[0].conf_j1}
              </p>
            </div>
            <div className="bg-lime-600 px-5 py-5 rounded-lg shadow-md shadow-neutral-900">
              <p>
                Nombre de personnes déclarées positives (J-1 date de
                prélèvement):
                {data?.[0].conf}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
