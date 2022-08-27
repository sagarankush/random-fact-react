import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';

export default function Main(){
  // const [factId, setFactId] = useState(-1);
  // let srText = "Press Enter to get Next"
  // let srElement= <span className='sr-only'></span>
  const [fact, setFact] = useState("");
  const [srText, setSrText] = useState("Press Enter to get Next");
  // const [srButtonInfo, setSrButtonInfo] = useState(srText);

  const newFact = () => {
    axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => {
        setFact(response.data.text);
        setSrText("Press Enter to get Next");
        // setFactId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    newFact();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div role='main' className={styles.factContainer}>
          <h1 aria-live='polite' className={styles.fact}>
            {fact}
            <span className='sr-only'>{srText}</span>
            </h1>
          <button type='button' autoFocus title='get next random fact' onClick={newFact} className={styles.newButton}>Next Random Fact</button>
        </div>
      </div>
    </>
  )
}