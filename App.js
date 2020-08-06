class Foto extends React.Component {
  handleFotoClick = (e) => {
    console.log(e.target.getAttribute("id"));
  };
  render() {
    return (
      <img
        id={this.props.id}
        src={this.props.url}
        onClick={this.handleFotoClick}
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
    fotosGalery: [3, 2, 2, 0, 1, 0],
    id: 0,
    namberFotos: 3,
  };

  makeId = () => {
    return this.state.id++;
  };

  render() {
    return (
      <div>
        {this.state.fotosGalery.map((item) => (
          <Foto id={this.makeId()} url={this.state.fotosUrl[item]} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
