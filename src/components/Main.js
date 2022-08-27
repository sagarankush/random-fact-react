import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';

export default function Main(){
  // const [factId, setFactId] = useState(-1);
  const srText = <span className='sr-only'>Press Enter to get Next</span>
  const [fact, setFact] = useState("");
  const [srButtonInfo, setSrButtonInfo] = useState(srText);

  const newFact = () => {
    axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => {
        setFact(response.data.text);
        setSrButtonInfo(srText);
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
        <div role='main' className={styles.factContainer}>
          <h1 aria-live='polite' className={styles.fact}>{fact}{srButtonInfo}</h1>
          <button autoFocus title='get next random fact' onClick={newFact} className={styles.newButton}>Next Random Fact</button>
        </div>
      </div>
    </>
  )
}