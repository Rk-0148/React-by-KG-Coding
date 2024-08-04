export default function component1() {
  let randomNum = Math.floor(Math.random() * 1000);
  return (
    <>
      <h3>The random number is : {randomNum}</h3>
    </>
  );
}
