import Navbar from './navbar.js'
import Hero from './hero.js'
import HeroImage from './heroimage.js'


function App(){
    return React.createElement("div",{className:"app"},[
        React.createElement(Navbar),

        React.createElement("section",{className: "hero-wrapper"},[
            React.createElement(Hero),
            React.createElement(HeroImage)
        ])
    ]);
}


export default App;



