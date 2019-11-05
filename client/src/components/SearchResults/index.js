import React from "react";
// import { Container, Row, Col } from "../Grid";

function ResultsCard(props) {
    console.log(props.title)
    return (
        <div className="ResultsCard row" id={props.title + " Card"}>
            <div style={{ color: 'red' }}>{props.title}</div>
            {/* <div className="ImageDiv col-2">
                <img src={props.image} alt={"Image of" + props.title}></img>

            </div>

            <div className="InfoDiv col-9">
                <div className="row">
                    <h2 className="col-8">
                        {props.title}
                    </h2>
                    <h3 className="col-4">
                        {props.author}
                    </h3>
                </div>
                <p className="ResultDescription">
                    {props.description}
                </p>
            </div>

            <div className="ResultsOptions col-1">
                <a href={props.link} target="_blank">
                    <button className="View ResultOption">
                        View
                </button>
                </a>
                <button className="Save ResultOption" id={props.id}>
                    Save
                </button>
            </div> */}
        </div>

    );
};

function ResultsContainer(props) {
    // console.log(props)
   
    return (
        props.results.length === 0) ? (
            <div id="ResultsContainer">
                <h1> Search Results </h1>
            </div>
        ) : (
        
                <div id="ResultsContainer">
                    <h1>Search Results </h1>
                    {props.results.map((book) => {

                        return (
                            <ResultsCard
                                key={book.id}
                                id={book.id}
                                image={book.image}
                                title={book.volumeInfo.title}
                                author={book.authors}
                                description={book.description}
                                link={book.link}
                                saveBook={props.saveBook}
                            />
                        );
                    })}
                </div>
            )

    
}

export default ResultsContainer;