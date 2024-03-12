import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddForm from "./AddForm";

function App() {
  const INITIAL_STATE = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState({});
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((Data) => ({
      ...Data,
      [name]: value,
    }));
  };
  const handleSubmit = (e, type) => {
    e.preventDefault();
    let newItem = {
      ...formData,
      id: formData.name.toLowerCase().replace(/\s/g, "-"),
    };
    const added = SnackOrBoozeApi.addItem(type, newItem);
    added
      ? (window.location.href = `/${type}`)
      : alert("Error adding new Item. Try again later.");
    setFormData(INITIAL_STATE);
  };

  useEffect(() => {
    async function getSnacks() {
      let items = await SnackOrBoozeApi.getSnacks();
      setItems(items);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={items.snacks.length} drinks={items.drinks.length} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/snacks">
              <Menu items={items.snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={items.drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/add">
              <AddForm
                formData={formData}
                type="snacks"
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Route>
            <Route path="/drinks/add">
              <AddForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                type="drinks"
              />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={items.snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={items.drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
