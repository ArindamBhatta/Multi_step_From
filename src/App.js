import FirstPage from "./Pagination/FirstPage";
import SecondPage from "./Pagination/SecondPage";
import ThirdPage from "./Pagination/ThirdPage";
import FourthPage from "./Pagination/FourthPage";
import FifthPage from "./Pagination/FifthPage";
import SixthPage from "./Pagination/SixthPage";
import SevenPage from "./Pagination/SevenPage";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentpage] = useState(0);

  const handleContinue = () => {
    setCurrentpage(currentPage + 1);
  };
  const handleGoBack = () => {
    setCurrentpage(currentPage - 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <FirstPage onContinue={handleContinue} />;
      case 1:
        return (
          <SecondPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      case 2:
        return (
          <ThirdPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      case 3:
        return (
          <FourthPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      case 4:
        return (
          <FifthPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      case 5:
        return (
          <SixthPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      case 6:
        return (
          <SevenPage onContinue={handleContinue} onGoBack={handleGoBack} />
        );
      default:
        return null;
    }
  };
  return <div className="h-screen">{renderPage()}</div>;
}

export default App;
