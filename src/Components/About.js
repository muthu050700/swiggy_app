import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"muthu function"} /> */}
        <UserClass name={"First class"} location={"chennai"} />
      </div>
    );
  }
}

export default About;
