import React, { Component } from "react";
import MainForm from "./MainForm";
import "./app.css";
import CustomerList from "./CustomerList";

class App extends Component {
    render() {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">React JS CRUD with Laravel API</a>
                    </div>
                </div>

                <div className="ui main container">
                    <MainForm />
                    
                    <CustomerList/>
                </div>
            </div>
        );
    }
}

export default App;