import React, { useState , useEffect } from "react";
import axios from "axios";
import "./adminTransaction.scss";


const AdminTransaction = () => {
        const [users , setUsers] = useState([])
        const [form , setForm] = useState({
        userId : "",
        type : "",
        amount : Number,
        status : "",
        date : Date
    
    })

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

            try{
                const res = axios.post("http://localhost:5000/api/transactions/transaction", form)
               console.log(res) 
               alert("successful Transaction")
            }catch(err){
                console.log(err)
            }
        }
    return(

        <div className="adminTransaction">
            <form onSubmit={handleSubmit}>
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
                    <label>Type</label>
                    <input  name="type" value={form.type} onChange={handleChange} type="text" />
                </div>
                <div className="field">
                    <label>Amount</label>
                    <input name="amount" value={form.amount} onChange={handleChange} type="number" />
                </div>
                <div className="field">
                    <label>Status</label>
                    <input name="status" value={form.status} onChange={handleChange} type="text" />
                </div>
                <div className="field">
                    <label>Date</label>
                    <input type="datetime-local" name="date" onChange={handleChange} value={form.date}/>
                </div>
             
          
         


            <button type="submit">Set Transaction</button>
        </form>

        </div>
        
    )

}


export default AdminTransaction