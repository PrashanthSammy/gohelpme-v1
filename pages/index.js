import Head from "next/head";
import Header from "../components/UI/Header";
import Cards from "../components/UI/FundCards";
import Footer from "../components/UI/Footer";
import Hero from "../components/UI/Hero";
import Hero2 from "../components/UI/Hero2";
import CategoryFunds from "../components/UI/CategoryFunds";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Go Help Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      {/* <div className="relative grid grid-flow-row grid-cols-1 items-center">
        <div className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"> */}
      <CategoryFunds categoryTitle="Top Performing Funds" category="Medical" />
      {/* </div>
      </div> */}
      <Hero2 />
      <Footer />
    </div>
  );
}
