// import React from "react";
// import ReactDOM from "react-dom";
// import foto1 from "./ocean-918999_1920.jpg";
// import "../style.css";

class Foto extends React.Component {
  state = {
    fotoGalery: [
      "./home-office-336373_1920.jpg",
      "./light-bulb-1246043_1920.jpg",
      "./milky-way-984050_1920.jpg",
      "./ocean-918999_1920.jpg",
    ],
  };

  randomFoto = () => {
    const randomNamber = Math.floor(Math.random() * (4 - 0));
    return randomNamber;
  };

  render() {
    return <img src={this.state.fotoGalery[this.randomFoto()]} />;
  }
}

function App(params) {
  return (
    <div>
      <Foto />
      <Foto />
      <Foto />
      <Foto />
      <Foto />
      <Foto />
      <Foto />
      <Foto />
      <Foto />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
