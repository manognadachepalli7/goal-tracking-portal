function Admin(){

return(

<div className="page">

<div className="card">

<h1>Admin Dashboard</h1>

<div className="stats">

<div className="statBox">
<h3>Total Employees</h3>
<p>10</p>
</div>

<div className="statBox">
<h3>Approved Goals</h3>
<p>8</p>
</div>

<div className="statBox">
<h3>Pending Goals</h3>
<p>2</p>
</div>

</div>

<h2>Goal Control</h2>

<div className="roleButtons">

<button className="blue">
Unlock Goals
</button>

<button className="green">
Push Shared KPI
</button>

</div>

<h2>Audit Log</h2>

<div className="goalGrid">

<div className="goalCard">
Manager approved Sales Goal
</div>

<div className="goalCard">
Admin unlocked Goal Sheet
</div>

<div className="goalCard">
New KPI released
</div>

<div className="goalCard">
Quarter report generated
</div>

</div>

</div>

</div>

);

}

export default Admin;