import "../css/displayInfo.scss";
import React from "react";
// import UserInfo from "./UserInfo";

class DisplayInfo extends React.Component {
  constructor(props) { // hàm contructor có td chuẩn bị dữ liệu chạy trước cả render
    super(props);
    this.state = {
      isShowUser: true
    }

  }
  componentDidMount() { // sau khi thực hiện xong thứ tự lifecycle mounting -> constructor -> render -> component dif môunt
    setTimeout(() => {
      document.title = "Title changed!"
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) { // hàm xảy ra khi có props, state mới hoặc thay đổi
    console.log("component did update ", this.props, prevProps);
    //this.props: hiện tại, prevProps : quá khứ
    if(this.props.listUser !== prevProps.listUser){
      if(this.props.listUser.length === 5){
          alert("Ban da du so luogn user = 5")
      }
    }
  }

  handleClickHide = () => {
    this.setState({
      isShowUser: !this.state.isShowUser
    })
  }

  render() {
    console.log("this.props", this.props);
    //Destructuring array/object
    const { listUser } = this.props; //Object
    console.log(listUser);

    return (
      <React.Fragment>
        <div className="display-info">
          <div>
            <span onClick={() => { this.handleClickHide() }}>
              {this.state.isShowUser === true ? "Hide content" : "Show content"}
            </span>
          </div>
          {this.state.isShowUser &&
            <>
              {/* <div>My name is {name}</div>
            <div>Age : {age}</div> 
                // if (+item.age > 18) 
                // muốn chuyển đổi từ string sang number -> thêm + đăng trước*/}
              {listUser.map((user, index) => {
                return (
                  <div key={user.id} className={+user.age > 18 ? "red" : "blue"}>

                    <div>
                      <div style={{ color: "Green", fontWeight: "bold" }}>My name is "{user.name}" </div>
                      <div className="size-20">Age : {user.age}</div>
                    </div>

                    <div>
                      <button onClick={() => this.props.handlDeleteUser(user.id)}>Delete </button>
                    </div>

                    <hr />
                  </div>
                );
              })}
            </>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayInfo;
