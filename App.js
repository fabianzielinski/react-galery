class Foto extends React.Component {
  sendIdFoto = (e) => {
    let index = e.target.getAttribute("id");
    console.log(e.target);
    console.log(index);
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
      fotosGalery: [0, 1, 2, 3, 1, 0],
      id: 0,
    };
  }

  makeId = () => {
    let Id = this.state.id;
    let newId = this.state.id++;
    // this.setState({ id: newId });
    return Id, newId;
  };

  random = (range) => {
    const randomNamber = Math.floor(Math.random() * (range - 0));
    return randomNamber;
  };

  changeFoto = (nrIdFoto) => {
    console.log(nrIdFoto);
    let a = this.state.fotosGalery.slice(); //creates the clone of the state
    console.log(a);
    a[nrIdFoto] = this.random(4);
    console.log(a[nrIdFoto]);
    this.uppdateState(a);
    // this.setState({ fotosGalery: a });
    return a;
  };

  uppdateState = (a) => {
    console.log(a);
    this.setState({
      fotosGalery: a,
    });
    console.log(this.state.fotosGalery);
  };

  // componentWillReceiveProps(nextProps) {
  //   this.setState((a, newId) => {
  //     console.log(a);
  //     return {
  //       fotosGalery: nextProps.a,
  //       id: nextProps.newId,
  //     };
  //   });
  // }

  render() {
    return (
      <div>
        {this.state.fotosGalery.map((item) => (
          <Foto
            id={/*this.state.fotosGalery.indexOf(item)*/ this.makeId()}
            url={this.state.fotosUrl[item]}
            changeFoto={this.changeFoto}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
