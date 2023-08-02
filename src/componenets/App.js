import logo from "../assets/logo.svg";
import ImageContainer from "./LandingPage";
import SubmitForm from "./NewsLetter";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[#201A26] w-full h-full">
        <nav className="container p-4">
          <div className="pl-4 lg:pl-16">
            <img src={logo} alt="Kova logo" width={75} />
          </div>
        </nav>

      <div className="grid gap-4 lg:grid-cols-2 lg:px-8 lg:pt-0">
        <div className="w-full">
          <SubmitForm />
        </div>
        <div className="w-full">
          <ImageContainer />
        </div>
      </div>
          <Footer />
    </div>
  );
}

export default App;
