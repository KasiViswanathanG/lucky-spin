import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import CollectOffer from "./components/pages/CollectOffer";
import EnterContest from "./components/pages/EnterContest";
import LuckySpin from "./components/pages/LuckySpin";
import theme from "./components/theme/theme";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";

function App() {
  const page = useSelector((state: any) => state.page.page);
  const [isConfetti, setIsConfetti] = useState(true);
  useEffect(() => {
    if (page === 3) {
      setTimeout(() => {
        setIsConfetti(false);
      }, 3500);
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        {page === 1 && <EnterContest />}
        {page === 2 && <LuckySpin />}
        {page === 3 && <CollectOffer />}
        {page === 3 && isConfetti && <Confetti width={1600} height={400} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
