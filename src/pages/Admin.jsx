import { useState } from "react";

function Admin(){

const [locked,setLocked]=useState(false);

const employees=[

{
name:"Employee 1",
status:"Completed"
},

{
name:"Employee 2",
status:"Pending"
},

{
name:"Employee 3",
status:"Completed"
},

{
name:"Employee 4",
status:"Pending"
}

];

const downloadReport=()=>{

const data=
"Employee,Status\n"+
employees
.map(
e =>
`${e.name},${e.status}`
)
.join("\n");

const blob=
new Blob(
[data],
{
type:
"text/csv"
}
);

const url=
URL.createObjectURL(
blob
);

const a=
document.createElement(
"a"
);

a.href=url;

a.download=
"achievement_report.csv";

a.click();

};

return(

<div className="page">

<div className="card">

<h1>Admin Dashboard</h1>

<button
className="red"
onClick={()=>
setLocked(!locked)
}
>

{locked
? "Unlock Goals"
: "Lock Goals"}

</button>

<button
className="blue"
onClick={downloadReport}
>

Export CSV

</button>

<br/><br/>

<div className="stats">

<div className="statBox">

Employees

<br/>

4

</div>

<div className="statBox">

Completed

<br/>

2

</div>

<div className="statBox">

Pending

<br/>

2

</div>

</div>

<br/>

<h2>
Manager Setup
</h2>

<div className="goalGrid">

<div className="goalCard">

<h3>
Manager A
</h3>

<p>
Team :
Employee 1
</p>

<p>
Employee 2
</p>

<p>
Employee 3
</p>

<p>
Employee 4
</p>

</div>

<div className="goalCard">

<h3>
Manager B
</h3>

<p>
Employee 5
</p>

<p>
Employee 6
</p>

<p>
Employee 7
</p>

<p>
Employee 8
</p>

</div>

</div>

<br/>
<h2>
Cycle Management
</h2>

<div className="goalGrid">

<div className="goalCard">

<h3>
Phase 1
</h3>

<p>
Goal Setting
</p>

<p>
Open Date :
1 May
</p>

<p>
Status :
Open
</p>

</div>

<div className="goalCard">

<h3>
Q1 Check-in
</h3>

<p>
Month :
July
</p>

<p>
Status :
Active
</p>

</div>

<div className="goalCard">

<h3>
Q2 Check-in
</h3>

<p>
Month :
October
</p>

<p>
Status :
Pending
</p>

</div>

<div className="goalCard">

<h3>
Q3 Check-in
</h3>

<p>
Month :
January
</p>

<p>
Status :
Pending
</p>

</div>

<div className="goalCard">

<h3>
Q4 Annual
</h3>

<p>
Month :
March / April
</p>

<p>
Status :
Pending
</p>

</div>

</div>

<br/>

<div className="goalGrid">

{employees.map(
(emp,index)=>(

<div
className="goalCard"
key={index}
>

<h3>
{emp.name}
</h3>

<p>

Status :

{emp.status}

</p>

</div>

))

}

</div>

<br/>

<h2>
Analytics
</h2>

<div className="goalCard">

Q1 ███████ 70%

<br/><br/>

Q2 ████████ 80%

<br/><br/>

Q3 █████████ 90%

<br/><br/>

Q4 ██████████ 100%

</div>

</div>

</div>

);

}

export default Admin;