import { Component, ReactNode } from "react";
import "./styles.css";

class App extends Component {
  state = {
    searchInput: "",
    mealsList: "",
  };

  componentDidMount() {
    this.getMealsData();
  }

  getMealsData = async () => {
    const { searchInput, mealsList } = this.state;
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const data = await response.json();
    console.log(data["meals"]);
    this.setState({ mealsList: data["meals"] });
  };

  render(): ReactNode {
    const { mealsList } = this.state;
    return (
      <div>
        <h1>Meals Finder</h1>
        <input type="search" />
        <ul>hi</ul>
      </div>
    );
  }
}

export default App;
