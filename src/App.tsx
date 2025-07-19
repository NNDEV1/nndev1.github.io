import React, { useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyle } from './styles/globalStyles';
import { lightTheme, darkTheme, ThemeContextType } from './styles/theme';

// Import components (we'll create these next)
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ReachOut from './components/ReachOut/ReachOut';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

// Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  const themeContextValue: ThemeContextType = {
    theme: currentTheme,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            {/* <Projects /> */}
            {/* <Experience /> */}
            {/* <Recent /> */}
            {/* <Skills /> */}
            <ReachOut />
            {/* <Contact /> */}
          </motion.main>
          <Footer />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App; 