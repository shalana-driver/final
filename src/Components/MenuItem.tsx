interface Props {
    name: string
    description: string
    search: string
}

function MenuItem({name, description, search}: Props) {
    const getHighlightedText = (text: string, search: string) => {
        const regex = new RegExp(`(${search})`, 'gi'); //creating a regex for the search phrase that is case insensitive and will check for results anywhere in the text
        const pieces = text.split(regex); //splitting the input text using the search phrase as the separator
    
        return pieces.map((piece, index) => { //map over the array that contains the pieces of the search phrase and the other parts that don't match
          if (piece.toLowerCase() === search.toLowerCase()) { //if the piece matches the search phrase, add the "highlight" class 
            return <span key={index} className="highlight">{piece}</span>;
          } else {
            return piece;
          }
        });
      };
      return (
        <>
            <p>{getHighlightedText(name, search)}:   {getHighlightedText(description, search)} </p>
        </>
       );   
}

export default MenuItem;