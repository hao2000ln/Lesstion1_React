// Là file chưa component của dự án
// import logo from "./logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import "./css/App.scss";
import MyComponent from "./components/MyComponents";
import React from "react";

//class component
class App extends React.Component {
  //jsx
  render() {
    return (
      <React.Fragment>
        <MyComponent />
      </React.Fragment>
    );
  }
}
// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Lương Ngọc Hảo</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
