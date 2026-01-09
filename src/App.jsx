import { useState } from 'react';
import { Header } from "./components/header";
import { SearchBar } from "./components/searchbar";
import { PhotoGrid } from "./components/photogrid";
import { Footer } from "./components/footer";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <PhotoGrid searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;