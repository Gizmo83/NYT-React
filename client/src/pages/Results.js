import React, { Component } from "react";
import API from "../utils/API";
import "./Results.css";



class Results extends Component {

    saveArticle = (url, title, date) => {
        console.log(url, title, date)

        API.saveArticle({
            title: title,
            date: date,
            url: url
        })
        .then()
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="results card">
                <div className="card-header">
                    <h2>Search Results</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.props.results.map((arr) => {
                                console.log(arr)
                                return (
                                    <li className="list-group-item" key={arr._id}>
                                        <a href={arr.web_url}>
                                            {arr.headline.main}
                                        </a>
                                        <button onClick={() => this.saveArticle(arr.web_url, arr.headline.main, arr.pub_date) }key={arr._id}type="button" className="save-btn btn btn-primary" >Save</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Results;