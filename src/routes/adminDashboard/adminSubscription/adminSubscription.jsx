import React, { useState , useEffect} from "react";
import axios from "axios";
import "./adminSubscription.scss"



const AdminSubscription = () => {
    const [users , setUsers] = useState([])
    const [form , setForm ] = useState({
        userId : "",
        planName : "",
        amount : "",
        profitPercent : "",
        duration : "",
        status : "",
        startDate : "",
        endDate : ""
    }

    )

    useEffect(() => {

      const fetchUsers = async () => {

      try {
        const res = await axios.get("http://localhost:5000/api/allUsers/users"); 
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();

    } , [])

    const handleChange = (e) => {
        setForm({...form , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          
          const res = await axios.post("http://localhost:5000/api/subscribe/create", form);
          alert("successfully set transaction")
        } catch (err) {
      console.error(err);
    }

    }
    

    return(
        <div className="adminSubscription">
          <form onSubmit={handleSubmit}>
            <h1>Manage Subscriptions</h1>
              <div className="field">
                 <label>User </label>
                <select name="userId" value={form.userId} onChange={handleChange}>
                    <option value="">---Select user --</option>
                        {users.map((user) => {
                           return  <option key={user._id} value={user._id}>{user.userName} {user.email} </option>
                        })}
                </select>
              </div>
              <div className="field">
                <label>Plan </label>
                <input name="planName" type="text" value={form.planName} onChange={handleChange}/>
              </div>
              <div className="field">
              <label>Amount</label>
                <input type="Number" name="amount" value={form.amount} onChange={handleChange}/>
              </div>      
              <div className="field">
                <label >Profit Percent </label>
                <input type="Number" name="profitPercent" value={form.profitPercent} onChange={handleChange}/>
              </div> 
              <div className="field">
                <label>Duration </label>
                <input type="Number" name="duration" value={form.duration} onChange={handleChange}/>
              </div>
              <div className="field">
                <label>Status </label>
                <input type="text" name="status" value={form.status} onChange={handleChange} />
              </div>
              <div className="field">
                  <label>Start Date </label>
                  <input type="date" name="startDate" onChange={handleChange} value={form.startDate} />
              </div>
              <div className="field">
                  <label >End Date </label>
                  <input type="date" name="endDate" onChange={handleChange} value={form.endDate} id="" />
              </div>
              <button type="submit">Subscribe</button>
             </form>
          </div>
           
    )


}

export default AdminSubscription    