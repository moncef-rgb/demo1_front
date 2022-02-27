import { fontSize } from "@mui/system";
import React, { Component } from "react";
class Calcule extends Component {
    constructor() {
        super();
        this.state = {
            valeur1: 0,
            valeur2: 0,
            valeur3: 0,
        }

    }

    chnagerState = (event) => {
        let namefields = event.target.name; //ism il champs du formulaire 
        let valfields = event.target.value;// ism il valeur du formualire 
        this.setState({ [namefields]: valfields });
    }

    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     alert("la somme est : " + Math.floor(this.state.valeur1) + Math.floor(this.state.valeur2))
    // }


    render() {
        return (
            <form >
                valeur 1 :<input type="number" name="valeur1" onChange={this.chnagerState} /><br />
                valeur 2 :<input type="number" name="valeur2" onChange={this.chnagerState} />
                <h3 >la somme {Number(Number(this.state.valeur1)) + (Number(this.state.valeur2))} </h3>
            </form>
        );
    }
}
export default Calcule;