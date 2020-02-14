import React, { Component } from "react";

export default class Paging extends Component {
    state: {
        page: 1}
    }
    
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
        let pageToUse = this.state.__page;
    
        const parsedPage = Number(searchParams.get("page"));
        if (isNaN(parsedPage)) {
          pageToUse = 1;
        } else {
          pageToUse = parsedPage;
        }
    
        this.setState({ page: pageToUse });
      }
        
    render() {
        const page = this.state.page;
        const perPage = 20;
        const totalPokemon = this.props.totalPokemon;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const parsedPage = searchParams.get("page");

        let pageToUse;
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        }   else {
            pageToUse = parsedPage;
        }

        if (!totalPokemon) {
            return <p className="paging">No results, try again!</p>;
        }

        const lastPage = Math.ceil(totalPokemon / perPage);

        return (
            <p className="paging">
                <button className="prev" onClick={()=> this.updatePage(-1)}
                disable={pageToUse === 1 ? "true" : ""}
                type="button">◀</button>
            <span>
            Page
            {pageToUse} of
            {lastPage}
          </span>
          <button
          className="next"
          disabled={pageToUse === lastPage ? "true" : ""}
          onClick={() => this.updatePage(1)}
          type="button"
        >
          ▶
        </button>
        </p>
        );
    }      
}