
import MarineContactBanner from "../components/home/about/MarineContactBanner";
import MarineSystem from "../components/home/about/MarineSystem";
import MarineTeam from "../components/home/about/MarineTeam";
import MarineHero from "../components/home/hero/MarineHero";

export default function Home() {
  return (
    <>
      <MarineHero />

     <MarineSystem/>
     <MarineTeam/>
     <MarineContactBanner/>
    </>
  );
}