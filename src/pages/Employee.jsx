import { useState } from "react";

function Employee() {

const [goals,setGoals]=useState([]);

const [title,setTitle]=useState("");
const [target,setTarget]=useState("");
const [weight,setWeight]=useState("");
const [thrust,setThrust]=useState("Sales");
const [uom,setUom]=useState("Numeric");

const addGoal=()=>{

if(title===""){
alert("Enter Goal Title");
return;
}

if(goals.length>=8){
alert("Maximum 8 goals allowed");
return;
}

const total =
goals.reduce(
(sum,g)=>
sum+Number(g.weight),
0
)+Number(weight);

if(total>100){
alert(
"Total weight exceeds 100%"
);
return;
}

const goal={

title,
target,
weight,
thrust,
uom,

q1:"",
q2:"",
q3:"",
q4:"",
annual:"",

status:"Not Started"

};

setGoals([
...goals,
goal
]);

setTitle("");
setTarget("");
setWeight("");

};

const updateGoal=(
index,
field,
value
)=>{

const updated=[
...goals
];

updated[index][field]=value;

setGoals(updated);

};

return(

<div className="page">

<div className="card">

<h1>
Employee Dashboard
</h1>

<input
placeholder="Goal Title"
value={title}
onChange={(e)=>
setTitle(
e.target.value
)}
/>

<br/><br/>

<input
placeholder="Target"
value={target}
onChange={(e)=>
setTarget(
e.target.value
)}
/>

<br/><br/>

<input
placeholder="Weight %"
value={weight}
onChange={(e)=>
setWeight(
e.target.value
)}
/>

<br/><br/>

<select
value={thrust}
onChange={(e)=>
setThrust(
e.target.value
)}
>

<option>
Sales
</option>

<option>
Customer
</option>

<option>
Training
</option>

<option>
Operations
</option>

</select>

<br/><br/>

<select
value={uom}
onChange={(e)=>
setUom(
e.target.value
)}
>

<option>
Numeric
</option>

<option>
Percentage
</option>

<option>
Timeline
</option>

<option>
Zero Based
</option>

</select>

<br/><br/>

<button
className="blue"
onClick={addGoal}
>

Add Goal

</button>

<br/><br/>

<div className="goalGrid">

{

goals.map(
(goal,index)=>(

<div
className="goalCard"
key={index}
>

<h2>
{goal.title}
</h2>

<p>
Target :
{goal.target}
</p>

<p>
Weight :
{goal.weight}%
</p>

<p>
Thrust :
{goal.thrust}
</p>

<p>
UoM :
{goal.uom}
</p>

<h3>
Quarterly Achievement
</h3>

<input
placeholder="Q1"
value={goal.q1}
onChange={(e)=>
updateGoal(
index,
"q1",
e.target.value
)}
/>

<input
placeholder="Q2"
value={goal.q2}
onChange={(e)=>
updateGoal(
index,
"q2",
e.target.value
)}
/>

<input
placeholder="Q3"
value={goal.q3}
onChange={(e)=>
updateGoal(
index,
"q3",
e.target.value
)}
/>

<input
placeholder="Q4"
value={goal.q4}
onChange={(e)=>
updateGoal(
index,
"q4",
e.target.value
)}
/>

<br/><br/>

<h4>
Annual Achievement
</h4>

<input
placeholder="Annual Score"
value={goal.annual}
onChange={(e)=>
updateGoal(
index,
"annual",
e.target.value
)}
/>

<br/><br/>

<select
value={goal.status}
onChange={(e)=>
updateGoal(
index,
"status",
e.target.value
)}
>

<option>
Not Started
</option>

<option>
On Track
</option>

<option>
Completed
</option>

</select>

<br/><br/>

<div className="goalCard">

Planned :
{goal.target}

<br/>

Q1 :
{goal.q1}

<br/>

Q2 :
{goal.q2}

<br/>

Q3 :
{goal.q3}

<br/>

Q4 :
{goal.q4}

<br/>

Annual :
{goal.annual}

</div>

<br/>

<p>

Progress Score :

{

goal.q1 &&
goal.target

?

(
Number(
goal.q1
)
/
Number(
goal.target
)
).toFixed(2)

:

0

}

</p>

<p>

Status :

{goal.status}

</p>

</div>

))

}

</div>

</div>

</div>

);

}

export default Employee;