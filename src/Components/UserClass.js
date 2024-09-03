import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/muthu050700");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.state.userInfo);
    return (
      <div className="user-card">
        <img src={`${avatar_url}`} />
        <h1>Name: {name}</h1>
        <h2>Location: {location} </h2>

        <h3>Contact: muthukumaran050@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
