const fotosUrl = [
  "./home-office-336373_1920.jpg",
  "./light-bulb-1246043_1920.jpg",
  "./milky-way-984050_1920.jpg",
  "./ocean-918999_1920.jpg",
];

let fotosGalery = [
  { id: 0, number: 0 },
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 0 },
  { id: 5, number: 0 },
  { id: 6, number: 3 },
  { id: 7, number: 1 },
  { id: 8, number: 2 },
];

class Foto extends React.Component {
  sendIdFoto = (e) => {
    let index = e.target.getAttribute("id");
    // console.log(e.target);
    // console.log(index);
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
      flag: true,
    };
  }

  // makeId = () => {
  //   id = id + 1;
  //   return id;
  // };

  random = (range) => {
    const randomNamber = Math.floor(Math.random() * (range - 0));
    return randomNamber;
  };

  changeFoto = (nrIdFoto) => {
    // console.log(nrIdFoto);
    let a = fotosGalery.slice(); //creates the clone of the state
    // console.log(a);
    a[nrIdFoto].number = this.random(4);
    // console.log(a[nrIdFoto]);
    fotosGalery = a;
    this.setState({ flag: !this.state.flag });
    return a;
  };

  render() {
    return (
      <div>
        {fotosGalery.map((item) => (
          <Foto
            id={item.id}
            url={fotosUrl[item.number]}
            changeFoto={this.changeFoto}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
