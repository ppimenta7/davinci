/* eslint-disable @next/next/no-css-tags */
import { GetServerSideProps } from "next";
import { FC, useEffect } from "react";
import Head from "next/head";
import { getBugets } from "../../services/getBugets";
import LandingPreview from "../landing-preview/index";
import { BugetsInterface } from "../../interfaces/bugetsInterface";

interface IHome {
  bugets: BugetsInterface;
}

const Home: FC<IHome> = ({bugets}) => {
  useEffect(() => {
    document.body.classList.add("index-bus1");

    const removeClasses = [
      "land-demo2",
      "index-corporate",
      "index-restaurant",
      "index-arch",
      "index-freelancer",
      "cr-agency",
      "index-main",
      "mobile-app",
      "gr-orange-bg",
      "nft-market",
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  console.log(bugets)
  return (
    <>
      <Head>
        <title>Ravo - Business Startup</title>
      </Head>

      <main className="position-re">
        <pre>{JSON.stringify(bugets, undefined, 2)}</pre>
        {/* <LandingPreview bugets={bugets} products={undefined} /> */}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const bugets = await getBugets(19);

  return {
    props: {
      bugets: bugets,
    },
  };
};

export default Home;
