import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondsCounter = (props) => {
	const[seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
		  setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	  }, []);

	  const digitArray = String(seconds).padStart(6, '0').split('').reverse().slice(0, 6);

	  return (
		<div className="app counter">
			<div className="box clock">
			<FontAwesomeIcon icon={['far', 'clock']} />
			</div>
			{digitArray.map((digit, index) => (
				<div key={index} className="box">
					{digit}
				</div>
			))}
		</div>
	);
};

export default SecondsCounter;
