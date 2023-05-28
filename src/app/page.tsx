import BottleContainer from "./Components/BottleContainer";
import Header from "./Components/Header";
import LandingBanner from "./Components/LandingBanner";
import LeavesContainer from "./Components/LeavesContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <LandingBanner />
        <BottleContainer />
        <LeavesContainer />
      </main>
    </div>
  );
}
