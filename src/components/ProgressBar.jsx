import {useEffect, useState} from "react";

export function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  
  useEffect(() => {
	const interval = setInterval(() => {
	  console.log("Interval")
	  setRemainingTime(prevState => prevState - 10)
	}, 10);
	
	return () => {
	  clearInterval(interval);
	};
  }, []);
  return (
	<progress value={remainingTime} max={timer}/>
  
  )
}