import React, { Component } from "react";
import './App.css';


export default class Paging extends Component {
    state = { page: 1 };

    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => {
            this.updateControls();
        });
    }

    updatePage(increment) {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", this.state.page + increment);

        window.location.hash = searchParams.toString();
    }

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        let pageToUse = this.state.page;

        const parsedPage = Number(searchParams.get("page"));
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage;
        }

        this.setState({ page: pageToUse });
    }

    render() {
        const perPage = 20;
        const { totalResults } = this.props;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const parsedPage = parseInt(searchParams.get("page"));

        let pageToUse;
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage;
        }

        if (!totalResults) {
            return <p>No results, try again!</p>;
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return (
            <p className="paging">
                <button className="prev"
                    onClick={() => this.updatePage(-1)}
                    disabled={pageToUse === 1 ? true : ""}
                    type="button">◀</button>
                <span>
                    Page {pageToUse} of {lastPage}
                </span>
                <button
                    className="next"
                    disabled={pageToUse === lastPage ? true : ""}
                    onClick={() => this.updatePage(1)}
                    type="button"
                >
                    ▶
        </button>
            </p>
        );
    }
}