import React, {FC} from 'react';
import './App.css';
import {Button, Card} from "../../components";

const App: FC = () => {
  return (
      <>
          <Card title={"A new blog post!"} />
          <Button buttonText={"Read more!"} />
      </>
  )
}

export default App;
