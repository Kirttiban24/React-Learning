function Hero(){
    return React.createElement("section", {className: "hero"},[

        React.createElement("div", {className: "stats"},[
            React.createElement("div",{className:"stat"},[
                React.createElement("h2", null, "+200"),
                React.createElement("p", null, "Projects Completed")
            ]),
            React.createElement("div",{className:"stat"},[
                React.createElement("h2", null, "50+"),
                React.createElement("p", null, "Startup Raised")
            ])
        ]),
        React.createElement("h1", null, "Hello"),
        React.createElement("p",{className: "hero-subtitle"},"- It's D. Nova a design wizard")

    ]);

}

export default Hero;