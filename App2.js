// import React from "react";
// import ReactDOM from "react-dom";
// import foto1 from "./ocean-918999_1920.jpg";
// import "../style.css";

class Foto extends React.Component {
  randomFoto = () => {
    const randomNamber = Math.floor(Math.random() * (4 - 0));
    this.setState(
      (this.state.fotosGalery[this.state.index] = {
        number: randomNamber,
        id: this.state.index,
      })
    );
    this.setState(this.state.index++);
    return this.state.fotosGalery.number[this.state.index--];
  };

  handleClick(e) {
    console.log("ssssssss");
    // this.setState((this.state.fotosGalery[e.target.this.state.index] = 1));
  }

  render() {
    return (
      <img
        src={this.state.fotosUrl[this.randomFoto()]}
        alt="Foto"
        onClick={(e) => this.handleClick(e)}
      />
    );
  }
}

class App extends React.Component {
  state = {
    fotosUrl: [
      "./home-office-336373_1920.jpg",
      "./light-bulb-1246043_1920.jpg",
      "./milky-way-984050_1920.jpg",
      "./ocean-918999_1920.jpg",
    ],

    fotosGalery: [],

    index: 0,
  };

  render() {
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
}

ReactDOM.render(<App />, document.getElementById("root"));
