export default function Clock() {
  let time = new Date();
  return (
    <div>
      <h2>
        The current time is : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
}
