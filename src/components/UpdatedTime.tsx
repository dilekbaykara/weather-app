import React from "react";

function UpdatedTime(props: { weather: any }) {
  const lastUpdatedDate = new Date(
    props.weather.current.last_updated_epoch * 1000
  );
  const lastUpdatedString = lastUpdatedDate.toLocaleString();

  return (
    <div id="time-display">
      Local Time: {""}
      {lastUpdatedString}
    </div>
  );
}

export default UpdatedTime;
