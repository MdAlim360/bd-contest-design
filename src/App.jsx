import CalendarComponent from "./Component/CalenderComponent";
import CardSection from "./Component/CardSection";
import ComplainBox from "./Component/ComplainBox";
import Eservices from "./Component/Eservices";
import Footer from "./Component/Footer";
import Head from "./Component/Head";
import Header from "./Component/Header";
import Hotlines from "./Component/HotLines";
import InformationComponent from "./Component/InformationComponent";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import NoticeBoard from "./Component/NoticeBoard";

const App = () => (
  <div className="font-sans text-gray-900">
    <Navbar />

    <div className="pt-o md:pt-16">
      <NoticeBoard />
    </div>
    <div className="-mt-4">
      <Header />
    </div>
    <main>
      <div className="mt-16">
        <Head />
      </div>
      <div className="mt-16">
        <CardSection />
      </div>

      <div className="mt-20 md:mt-24">
        <News />
      </div>
      <div className="mt-28">
        <CalendarComponent />
      </div>

      <div className="mt-20 md:mt-24">
        <Eservices />
        <InformationComponent />
      </div>

      <div className="mt-24">
        <Hotlines />
      </div>
      <div className="mt-24">
        <ComplainBox />
      </div>
    </main>
    <div className="mt-20">
      <Footer />
    </div>
  </div>
);

export default App;
