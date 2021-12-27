import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { User } from "../libs/types";
import useSWR from "swr";
import axios from "axios";
import fetcher from "../libs/fetcher";
const Home: NextPage = () => {
  const { data } = useSWR<User>(`/api/discord`, fetcher);
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get("/api/discord", {
        headers: {
          Authorization: `Bearer ${data?.code}`,
        },
      })
      .then((res) => {
        setUser(JSON.stringify(res.data));
      });
  });
  return (
    <>
      <FadeIn>{user}</FadeIn>
    </>
  );
};

export default Home;
