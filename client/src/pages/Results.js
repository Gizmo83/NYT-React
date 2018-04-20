import React, { Component } from "react";
//import "./Results.css";



class Results extends Component {

    saveArticle = (url, title, date) => {
        this.props.onClick(url, title, date)
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