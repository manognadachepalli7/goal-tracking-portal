import { useState } from "react";

function Manager(){

const [goals,setGoals]=useState([

{
employee:"Employee 1",
goal:"Increase Sales",
target:"100000",
weight:"20",
actual:"80000",
comment:"",
status:"Pending"
},

{
employee:"Employee 2",
goal:"Customer Satisfaction",
target:"95",
weight:"15",
actual:"88",
comment:"",
status:"Pending"
}

]);

const updateField=(index,field,value)=>{

const updated=[...goals];

updated[index][field]=value;

setGoals(updated);

};

const updateStatus=(index,status)=>{

const updated=[...goals];

updated[index].status=status;

setGoals(updated);

};

return(

<div className="page">

<div className="card">

<h1>
Manager Dashboard
</h1>

<div className="stats">

<div className="statBox">
Employees
<br/>
8
</div>

<div className="statBox">
Managers
<br/>
2
</div>

<div className="statBox">
Approved
<br/>
6
</div>

</div>

<br/>

<div className="goalGrid">

{

goals.map(
(goal,index)=>(

<div
className="goalCard"
key={index}
>

<h2>
{goal.employee}
</h2>

<p>
Goal :
{goal.goal}
</p>

<p>
Planned :
{goal.target}
</p>

<p>
Actual :
{goal.actual}
</p>

<h4>
Target Edit
</h4>

<input
value={goal.target}
onChange={(e)=>
updateField(
index,
"target",
e.target.value
)}
/>

<h4>
Weight Edit
</h4>

<input
value={goal.weight}
onChange={(e)=>
updateField(
index,
"weight",
e.target.value
)}
/>

<h4>
Manager Check-in
</h4>

<textarea

placeholder=
"Quarter review comment"

value={goal.comment}

onChange={(e)=>
updateField(
index,
"comment",
e.target.value
)}

>

</textarea>

<br/><br/>

<p>

Status :

{goal.status}

</p>

<div className="roleButtons">

<button
className="green"
onClick={()=>
updateStatus(
index,
"Approved"
)}
>
Approve
</button>

<button
className="red"
onClick={()=>
updateStatus(
index,
"Rejected"
)}
>
Reject
</button>

<button
className="blue"
onClick={()=>
updateStatus(
index,
"Rework"
)}
>
Rework
</button>

</div>

</div>

))

}

</div>

</div>

</div>

);

}

export default Manager;