import './App.scss';
import DurationInput from './DurationInput';
import SplitInput from './SplitInput';
import DistanceInput from './DistanceInput';
import History from './History';
import { useEffect, useState } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

const SPLIT_DISTANCE = 500;

function App() {
  const [split, setSplit] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [calcSplit, setCalcSplit] = useState('');
  const [calcDistance, setCalcDistance] = useState('');
  const [calcTime, setCalcTime] = useState('');

  const [historyId, setHistoryId] = useState(0);
  const [history, setHistory] = useState([]);

  function calculateTime() {
    if (!!distance && !!split) {
      const newTime = split / SPLIT_DISTANCE * distance;
      setCalcTime(newTime);
      setTime(newTime);
      addHistory(distance, newTime, split);
    }
  }
  function calculateDistance() {
    if (!!time && !!split) {
      const newDistance = SPLIT_DISTANCE / split * time;
      setCalcDistance(newDistance);
      setDistance(newDistance);
      addHistory(newDistance, time, split);
    }
  }
  function calculateSplit() {
    if (!!distance && !!time) {
      const newSplit = time / distance * SPLIT_DISTANCE;
      setCalcSplit(newSplit);
      setSplit(newSplit);
      addHistory(distance, time, newSplit);
    }
  }

  function addHistory(dis, tim, spl) {
    setHistoryId(historyId + 1);
    const item = { id: historyId, distance: dis, time: round(tim), split: round(spl) };
    item.comments = checkForMemes(item);
    setHistory([...history, item]);
  }

  function round(num) {
    return Math.round(num * 10) / 10;
  }

  function is420(seconds) {
    return (Math.floor(seconds) % 3600 === 4 * 60 + 20);
  }

  function is69(seconds) {
    return (Math.floor(seconds) % 3600 === 69);
  }

  function checkForMemes(item) {
    const comments = {};
    if (Math.floor(item.time) === 4 * 3600 + 20 * 60 || Math.floor(item.time) % 3600 === 4 * 60 + 20) {
      comments.time = 'nice';
    }
    if (Math.floor(item.split) % 3600 === 4 * 60 + 20) {
      comments.split = 'nice';
    }
    if (distance === 69) {
      comments.distance = 'nice';
    }
    return comments;
  }

  function clearAll() {
    setSplit(null);
    setDistance(null);
    setTime(null);
    setCalcSplit(null);
    setCalcDistance(null);
    setCalcTime(null);
  }

  useEffect(() => {

  }, [split, time, distance])

  return (
    <div className="App">
      <DistanceInput value={calcDistance} name="distance" type="text" title="Distance" placeholder="0000" onChange={e => setDistance(e)} />
      <DurationInput value={calcTime} name="time" type="duration" title="Time" pattern="[\d\:\.]*" onChange={e => setTime(e)} />
      <SplitInput value={calcSplit} name="split" type="split" title="Split / 500m" pattern="[\d\:\.]*" onChange={e => setSplit(e)} />
      <p className="ClearButton"><Button href="javascript:void(0)" onClick={clearAll} className="Warning">clear all</Button></p>
      <ButtonGroup>
        <Button onClick={calculateTime}>Time</Button>
        <Button onClick={calculateDistance}>Distance</Button>
        <Button onClick={calculateSplit}>Split</Button>
      </ButtonGroup>
      <History history={history}></History>
    </div >
  );
}

export default App;
