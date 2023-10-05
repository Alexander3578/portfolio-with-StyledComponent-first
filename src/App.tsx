import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {MySkills} from "./layout/sections/mySkills/MySkills";
import {MyWorks} from "./layout/sections/myWorks/MyWorks";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <MySkills/>
            <MyWorks/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
