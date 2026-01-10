
function Navbar(){
    return React.createElement("nav",null,[

        React.createElement("div", {className: "logo"}, "LOGO"),

        React.createElement("ul",{className: "menu"},[
            React.createElement("li",null,"About"),
            React.createElement("li",null,"Portfolio"),
            React.createElement("li",null,"Services"),
            React.createElement("li",null,"Blog"),
        ]),
        React.createElement("a", {href: "#", className: "book-link"},["Book a Call",
            React.createElement("img", {src: "./arrow.png", className:"book-logo"})
        ])
    ]);
}

export default Navbar;