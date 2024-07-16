import { CssBaseline, ThemeProvider } from '@mui/material'; 
import { ColorModeContext, useMode } from './styles/theme';
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Home from './pages/Dashboard';
import SearchByYear from './pages/SearchByYear';

const App = () => {
  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
    <ThemeProvider theme={theme}>
      {/* Rest CSS */}
      <CssBaseline />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchByYear />} />
      </Routes>
      <Footer />
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;