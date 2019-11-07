import React from "react";

function SavedCard(props) {
    // console.log(props)
    return (
        <div className="SavedCard row" id={props.id + " Card"}>
            
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
                <p className="SavedDescription">
                    {props.description}
                </p>
            </div>

            <div className="SavedOptions col-1">
                <a href={props.link} target="_blank">
                    <button className="View SavedOption">
                        View
                </button>
                </a>
                <button className="RemoveSave SavedOption" id={props.id} onClick={(event) => { props.deleteBook(event.target.id) }} >
                    Remove Book
                </button>
            </div> 
        </div>

    );
};

function SavedBooks(props) {
    // console.log(props)
   
    return (
        props.results.length === 0) ? (
            <div id="SavedBooks">
                <h1 className = "results"> Saved Results </h1>
            </div>
        ) : (
        
                <div id="SavedBooks">
                    <h1>Saved Books </h1>
                    {props.results.map((book) => {

                        return (
                            <SavedCard
                                key={book.id}
                                id={book.id}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.infoLink}
                                deleteBook={props.removeBook}
                            />
                        );
                    })}
                </div>
            )

    
}

export default SavedCard;