import React from "react";
import "./style.css"


function ResultsCard(props) {
    // console.log(props)
    return (
        <div className="ResultsCard row" id={props.title + " Card"}>
            
             <div className="ImageDiv col-2">
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
                <button className="Save ResultOption" id={props.id} onClick={(event) => { 
                    event.preventDefault();
                    props.saveBook(props.id) 
                }}>
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
                <h1 className = "results"> Search Results </h1>
            </div>
        ) : (
        
                <div id="ResultsContainer">
                    <h1>Search Results </h1>
                    {props.results.map((book) => {

                        return (
                            <ResultsCard
                                key={book.id}
                                id={book.id}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.infoLink}
                                saveBook={props.saveBook}
                            />
                        );
                    })}
                </div>
            )

    
}

export default ResultsContainer;