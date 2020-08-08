class Foto extends React.Component {
  sendIdFoto = (e) => {
    let index = e.target.getAttribute("id");
    console.log(e.target);
    this.props.changeFoto(index);
  };

  render() {
    return (
      <img id={this.props.id} src={this.props.url} onClick={this.sendIdFoto} />
    );
  }
}

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
      fotosGalery: [0, 1, 2],
      id: 0,
    };
  }

  // makeId = () => {
  //   let Id = this.state.id;
  //   let newId = this.state.id++;
  //   // this.setState({ id: newId });
  //   return Id;
  // };

  random = (range) => {
    const randomNamber = Math.floor(Math.random() * (range - 0));
    return randomNamber;
  };

  changeFoto = (nrIdFoto) => {
    let a = this.state.fotosGalery.slice(); //creates the clone of the state
    a[nrIdFoto] = this.random(4);
    this.setState({
      fotosGalery: a,
    });
  };

  render() {
    return (
      <div>
        {this.state.fotosGalery.map((item) => (
          <Foto
            id={this.state.fotosGalery.indexOf(item)}
            url={this.state.fotosUrl[item]}
            changeFoto={this.changeFoto}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
