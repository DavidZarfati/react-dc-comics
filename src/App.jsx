import './App.css'
import Logo from '../components/Logo.jsx';
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import MainInfoSection from '../components/MainInfoSection.jsx';
import FooterSuperiore from '../components/FooterSuperiore.jsx';
import FooterInferiore from '../components/FooterInferiore.jsx';
import comics from './comics.js';

const navbarLinks = [
  { nome: "Characters", active: false },
  { nome: "Comics", active: true },
  { nome: "Movies", active: false },
  { nome: "Tv", active: false },
  { nome: "Games", active: false },
  { nome: "Collectibles", active: false },
  { nome: "Videos", active: false },
  { nome: "Fans", active: false },
  { nome: "News", active: false },
  { nome: "Shop", active: false },
];
function App() {


  return (
    <>
      <Header navbarLinks={navbarLinks} />
      <Main comics={comics} />
      <MainInfoSection />
      <FooterSuperiore />
      <FooterInferiore />
    </>
  )
}

export default App
