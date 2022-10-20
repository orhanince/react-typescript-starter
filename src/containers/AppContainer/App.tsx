import React, {FC} from 'react';
import './App.css';
import {Button, Card} from "../../components";

const App: FC = () => {
  return (
      <>
          <Card
              cardImage={"dasdfa"}
              cardBody={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
                  "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n" +
                  "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n" +
                  "optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n" +
                  "obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n" +
                  "nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n" +
                  "tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n" +
                  "quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n" +
                  "sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n" +
                  "recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n" +
                  "minima nesciunt dolorem! Officiis iure rerum voluptates a cumque ve"}
              cardTitle={"Card Title"} />
          <Button buttonText={"Read more!"} />
      </>
  )
}

export default App;
