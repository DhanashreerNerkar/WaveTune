import { useState } from 'react';
import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';
import About from './About';
import Subscribe from './Subscribe';
import ThemeSelection from './ThemeSelection';
import SkipLink from './SkipLink'; // Import the SkipLink component

function App() {
  const [page, setPage] = useState('#/');

  const navToHash = (e) => {
    e.preventDefault();
    setPage(e.target.hash);
  };

  return (
    <div className="app">
      <SkipLink /> {/* Add the SkipLink component at the top */}
      <Header navToHash={navToHash} />
      <main id="main-content" tabIndex="-1"> {/* Ensure the target for SkipLink exists */}
        {page === '#/' && <MainArea />}
        {page === '#/about' && <About />}
        {page === '#/subscribe' && <Subscribe />}
        {page === '#/themeselection' && <ThemeSelection />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
