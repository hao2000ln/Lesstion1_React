//class component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
  //jsx
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, name: "HAOLN 0", age: 10 },
        { id: 2, name: "HAOLN 1", age: 77 },
        { id: 3, name: "HAOLN 2", age: 22 },
      ],
    };
  }

  handleAddNewUser = (userObject) => {
    console.log("handleAddNewUser", userObject)
    this.setState({
      listUser: [userObject, ...this.state.listUser]
    })
  };

  handlDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUser];
    console.log(listUserClone);
    listUserClone = listUserClone.filter(item =>
      item.id !== userId
    );
    var confirm = window.confirm("bạn chắc chắn muốn xóa không?");
    if (confirm === true) {
      this.setState({ listUser: listUserClone })
    }

  };

  render() {
    // const ObjectInfo = {
    //   myage : 19,
    //   myname : "Hao, Luong Ngoc",
    //   address: "Viet Nam"
    // }
    return (
      <div>
        <h2>Lương Ngọc Hảo- component</h2>
        <AddUserInfo
          handleAddNewUser={this.handleAddNewUser}
        />
        <br />
        {/* DRY :  DONT'T REPPEAT YOUSEFT */}

        <DisplayInfo
          listUser={this.state.listUser}
          handlDeleteUser={this.handlDeleteUser}
        />


        {/* <DisplayInfo name={ObjectInfo.myname} age={ObjectInfo.myage} ObjectInfo={ObjectInfo}/> */}
      </div>
    );
  }
}
export default MyComponent;
