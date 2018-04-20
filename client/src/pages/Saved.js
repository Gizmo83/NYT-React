import React, { Component } from "react";

class Saved extends Component {

    delArticle = id => {
        this.props.onClick(id)
    }

    render() {
    return (
        <div className="saved card">
            <div className="card-header">
                <h2>Saved Articles</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        this.props.saved.map((arr) => {
                            console.log(arr)
                            return (
                                <li className="list-group-item" key={arr._id}>
                                    <a href={arr.url}>
                                        {arr.title}
                                    </a>
                                    <button onClick={() => this.delArticle(arr._id) }key={arr._id}type="button" className="save-btn btn btn-primary" >Delete</button>
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

export default Saved;