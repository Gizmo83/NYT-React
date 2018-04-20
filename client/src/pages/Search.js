import React, { Component } from "react";
import API from "../utils/API";
import Results from "./Results";
import Saved from "./Saved";
import "./Search.css";

class Search extends Component {
    state= {
        topic: "",
        startYear: "1900",
        endYear: "2019",
        results: [],
        saved: []
    };
    
    componentDidMount() {
        console.log("did mount")
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSavedArticles().then(res => {
            console.log(res)
            this.setState({
                saved: res.data
            })
        })
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name

        this.setState({
            [name]: value
        });
    };

    handleSubmitForm = event => {
        event.preventDefault();

        var topic = this.state.topic;
        var startYear = this.state.startYear;
        var endYear = this.state.endYear;

        API.searchArticles(topic, startYear, endYear)
            .then(res => {
                this.setState({
                    results: res.data.response.docs
                })
            })
    };

    saveArticle = (url, title, date) => {
        console.log(url, title, date)

        API.saveArticle({
            title: title,
            date: date,
            url: url
        })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }

    deleteArticle = id => {
        console.log(id)
        API.deleteArticle(id)
          .then(res => this.loadArticles())
          .catch(err => console.log(err));
    };


    render() {
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Search</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="topic"
                                    name="topic"
                                    //value={this.state.topic}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startYear">Start Year</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="startYear"
                                    name="startYear"
                                    //value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endYear">End Year</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="endYear"
                                    name="startYear"
                                    //value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <button onClick={this.handleSubmitForm} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                {this.state.results.length === 0 ? null : <Results results={this.state.results} onClick={this.saveArticle} />}
                <Saved saved={this.state.saved} onClick={this.deleteArticle}/>
            </div>
        )
    }


}

export default Search;