import React, { Component } from "react";
import AnimalProductItem from "../AnimalProductItem";

class Bird extends Component {
  render() {
    return this.props.animalProducts
      .filter((product) => product.productCategory === "Bird")
      .map((product) => (
        <AnimalProductItem key={product.id} product={product} markStatusPanier={this.props.markStatusPanier} markStatusFavori={this.props.markStatusFavori}/>
      ));
  }
}

export default Bird;
