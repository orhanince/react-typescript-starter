import React, {FC} from 'react';
import './App.css';
import {Button, Card} from "../../components";

const App: FC = () => {
  return (
      <>
          <Card
              cardImage={"dasdfa"}
              cardBody={"Some quick example text to build on the card title and make up the bulk of the card's content"}
              cardTitle={"Card Title"} />
          <Button buttonText={"Read more!"} />
      </>
  )
}

export default App;
