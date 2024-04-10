# Multi-Step Form Component

This is a multi-step form component built using React. It allows users to navigate through different steps/pages to complete a form.

> project is done as per instruction, all functionality added to this multistep from

- using a switch case to navigate through pages

```
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
        setTimeout(() => {
          setCurrentpage(6);
        }, 1000);
        return <SixthPage />;
      case 6:
        return <SevenPage />;
      default:
        return null;
    }
  };
```
