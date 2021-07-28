import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { useQuery } from "@apollo/client";
import { GET_IMAGES } from "./graphql/queries";

function App() {
  const { loading, error, data = false, refetch } = useQuery(GET_IMAGES);

  const { images = false } = data;

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>well that's embarassing...</h1>;

  return (
    <div className="App">
      <Header refetch={refetch} />
      <MainContent images={images} />
    </div>
  );
}

export default App;
