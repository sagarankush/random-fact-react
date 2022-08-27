import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';

export default function Main(){
  // const [factId, setFactId] = useState(-1);
  const [fact, setFact] = useState("");

  const newFact = () => {
    axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => {
        console.log(response.data.text);
        setFact(response.data.text);
        // setFactId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    newFact();
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.factContainer}>
          <h1 className={styles.fact}>{fact}</h1>
          <button onClick={newFact} className={styles.newButton}>New</button>
        </div>
      </div>
    </>
  )
}