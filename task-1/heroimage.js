function HeroImage() {
    return React.createElement(
        "div",
        { className: "hero-image" },
        React.createElement("img", {
            src: "./potrait.png",
            alt: "Hero Portrait"
        })
    );
}

export default HeroImage;
