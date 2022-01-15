import Button from './components/Button/Button';
import Display from './components/Display/Display';
import styles from './App.module.scss';
import { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState();
  const [timer, setTimer] = useState();

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1));
  };

  const stop = () => {
    if (timer) clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    setTime(0);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.app}>
      <Display time={time} />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </div>
  );
}

export default App;
