let kenny = "kehinde agboola";
let peter = "peter smith";
let matt = "matt fury";
let amol = "Amol Shookup";
let robin = "Robin wood";
let aaron = "Aaron D. Tyler";
let testname = "Brown James";
const element = (
  <ul style={{ color: "blue", fontSize: "16px" }}>
    <li>{kenny}</li>
    <li>{peter}</li>
    <li>{matt}</li>
    <li>{amol}</li>
    <li>{robin}</li>
    <li>{aaron}</li>
    <li>{testname}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
