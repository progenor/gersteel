import Head from "next/head";
import HomeComp from "../components/HomeComp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gersteel</title>
        <link rel="icon" href="/logo_G.ico" />
        <meta
          name="keywords"
          content="toroane, toron, teava gofrata, teaca, post tensionare, folie de protectie, sarma de arc, bridge, bird, ventilation, concrete, plastic, protective foil, foil, construction"
        />
        <meta
          name="description"
          content="Suntem o companie comercială în creștere dinamică, prezentă pe piețele din România și Bulgaria din 2005. Pe baza unor contracte de reprezentare exclusivă, furnizăm materii prime de bază, în special pentru fabrici de prefabricate, companii de posttensionare, producători de panouri sandwich și țigle de oțel. Producătorii de cărămizi și industria auto. Toți producătorii noștri sunt din Italia, Republica Cehă, Ungaria, Germania și Slovacia."
        />
      </Head>
      <main className="bigass">
        <div className="shits">
          <HomeComp />
        </div>
      </main>
    </div>
  );
}
