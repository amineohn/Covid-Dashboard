import type { NextPage } from "next";
import React from "react";
import FadeIn from "react-fade-in";
const Home: NextPage = () => {
  return (
    <>
      <FadeIn>
        <button>
          <a href="https://discord.com/oauth2/authorize?client_id=923472702365380628&redirect_uri=http://localhost:3001/callback&response_type=code&scope=identify%20guilds.join">
            Login
          </a>
        </button>
      </FadeIn>
    </>
  );
};

export default Home;
