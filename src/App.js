import './App.scss';
import DurationInput from './DurationInput';
import SplitInput from './SplitInput';
import DistanceInput from './DistanceInput';
import { useEffect, useState } from 'react';

const SPLIT_DISTANCE = 500;

function App() {
  const [split, setSplit] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [calcSplit, setCalcSplit] = useState('');
  const [calcDistance, setCalcDistance] = useState('');
  const [calcTime, setCalcTime] = useState('');

  function calculateTime() {
    const newTime = split / SPLIT_DISTANCE * distance;
    setCalcTime(newTime);
    setTime(newTime);
  }
  function calculateDistance() {
    const newDistance = SPLIT_DISTANCE / split * time;
    setCalcDistance(newDistance);
    setDistance(newDistance);
  }
  function calculateSplit() {
    const newSplit = time / distance * SPLIT_DISTANCE;
    setCalcSplit(newSplit);
    setSplit(newSplit);
  }

  useEffect(() => {

  }, [split, time, distance])

  return (
    <div className="App">
      <DistanceInput value={calcDistance} name="distance" type="text" title="Distance" placeholder="0000" onChange={e => setDistance(e)} />
      <DurationInput value={calcTime} name="time" type="duration" title="Time" pattern="[\d\:\.]*" onChange={e => setTime(e)} />
      <SplitInput value={calcSplit} name="split" type="split" title="Split / 500m" pattern="[\d\:\.]*" onChange={e => setSplit(e)} />
      <div className="ButtonGroup">
        <div className="Buttons">
          <button onClick={calculateTime}>Time</button>
          <button onClick={calculateDistance}>Distance</button>
          <button onClick={calculateSplit}>Split</button></div>
      </div>
    </div>
  );
}

export default App;
