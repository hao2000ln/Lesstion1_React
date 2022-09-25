import React from "react";
import "../css/App.scss";
import avt from "../images/avt.jpg"

class AddUserInfo extends React.Component {
  state = {
    name: "Lương Ngọc Hảo",
    age: "22",
    address: "Bắc Ninh",
  };
  // sử dung arrow function bên dưới hoặc như này

  handleClick = (event) => {
    // console.log(event.target.innerText);
    this.setState({
      address: "Lào cái change",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMoverOver(e) {
    console.log(e.target.innerText);
  }

  handleOnChangeName(event) {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  }
  handleOnChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault(); // loại bỏ các hành vi mặc định
    console.log(this.state); //là 1 object
    this.props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
      name: this.state.name,
      age: this.state.age
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="add-userinfo">
          {/* <button onClick={(event) => { this.handleClick(event);}}> 
          Click me
        </button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
          {/* input test */}
          <img src={avt} alt="Logo" />
          <form onSubmit={(event) => { this.handleOnSubmit(event); }}>
            <label htmlFor="addr">FullName</label>
            <input
              value={this.state.name}
              type="text"
              id="addr"
              onChange={(event) => {
                this.handleOnChangeName(event);
              }}
            />
            <br />
            <label htmlFor="age">Age</label>
            <input
              value={this.state.age}
              type="text"
              onChange={(event) => {
                this.handleOnChangeAge(event);
              }}
            />
            <br />
            <button>submit</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default AddUserInfo;
