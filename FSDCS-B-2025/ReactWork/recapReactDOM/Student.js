const parent  = document.getElementById('parent');
console.log(parent);

const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h2',{style:{color:'brown',backgroundColor:"aqua"}},'Welcome to react app');

const myName = <h2>Rahul Kumar</h2>
const branch = <h2>CS-B</h2>
const college = <h2>ABES Engineering College</h2>
const pic = (
  <img
    src="https://picsum.photos/120"
    alt="Random"
    style={{
      border: "3px solid brown",
      borderRadius: "15px",
      padding: "5px",
      backgroundColor: "aqua",
      display: "block",
      margin: "10px auto" // centers the image
    }}
  />
);
const container = (
  <>
    {h2}
    {myName}
    {branch}
    {college}
    {pic}
  </>
);
root.render(container);