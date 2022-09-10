import Head from "next/head";
import HomeComp from "../components/HomeComp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gersteel</title>
        <meta
          name="keywords"
          content="toroane, toron, teava gofrata, teaca, post tensionare, folie de protectie, sarma de arc, bridge, bird, ventilation, concrete, plastic, protective foil, foil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bigass">
        <div className="shits">
          <HomeComp />
        </div>
      </main>
    </div>
  );
}
