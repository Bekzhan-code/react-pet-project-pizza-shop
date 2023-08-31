import React from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import "./scss/style.scss";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

// СПОСОБ ПОДКЛЮЧЕНИЯ КЛАССОВОГО КОМПОНЕНТА С REDUX

// class App extends React.Component {
//   componentDidMount() {
//     fetch("http://localhost:3000/db.json")
//       .then((res) => res.json())
//       .then((json) => this.props.setPizzas(json.pizzas));
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />

//         <Routes>
//           <Route exact path="/" element={<Home pizzas={this.props.items} />} />
//           <Route exact path="/cart" Component={Cart} />
//         </Routes>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzasReducer.items,
//   };
// };

// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
