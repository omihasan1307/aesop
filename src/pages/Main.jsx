import AthenaeumSection from "./AthenaeumSection";
import BottomSection from "./BottomSection";
import FacialSection from "./FacialSection";
import Footer from "./Footer";
import FragranceSection from "./FragranceSection";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import Navbar from "./Navbar";
import ParsleySeedSection from "./ParsleySeedSection";
import StoreSection from "./StoreSection";
import TopHeader from "./TopHeader";
import WarmSection from "./WarmSection";

const Main = () => {
  return (
    <div>
      <TopHeader />
      <HeaderSection />
      <Navbar />
      <Header />
      <FragranceSection />
      <ParsleySeedSection />
      <AthenaeumSection />
      <WarmSection />
      <StoreSection />
      <FacialSection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Main;
