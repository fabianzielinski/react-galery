class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fotosUrl: [
        "./home-office-336373_1920.jpg",
        "./light-bulb-1246043_1920.jpg",
        "./milky-way-984050_1920.jpg",
        "./ocean-918999_1920.jpg",
      ],
      fotosGalery: [1, 2, 3],
      namberFotos: 3,
    };
  }

  random = () => {
    const randomNamber = Math.floor(Math.random() * (4 - 0));
    return randomNamber;
  };

  randomFillArray = () => {
    const arrayRandom = [];
    for (let index = 0; index < this.state.namberFotos; index++) {
      const value = arrayRandom.push(this.random());
    }
    this.setState((state) => {
      fotosGalery: state.fotosGalery.concat(value);
      return { fotosGalery };
    });
  };

  render() {
    <div>
      {this.randomFillArray()}
      {this.state.fotosGalery.map((item) => {
        console.log(this.state.fotosGalery[item.id]);
        return (
          <img
            key={this.state.fotosGalery[item.id]}
            src={this.state.fotosUrl[item.number]}
            alt={this.state.fotosGalery[item.id]}
          />
        );
      })}
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
