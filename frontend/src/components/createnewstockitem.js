import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {
    const [form, setForm] = useState( {
        
        name: "",
        quantity: "",
        price: "",
        itemStatus: "",
        });

    const navigate = useNavigate();

    //updating state properties
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }
    //handling submission
    async function onSubmit(e) {
        e.preventDefault();

        //when post req is sent to url, we'll add new rec to db
        const newItem = { ...form };

        await fetch("http://localhost:3001/stock/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm( {name: "", quantity: "", price: "", itemStatus: ""});
        navigate("/");
    }
    //displaying form that takes input from user
    return(
        <div>
            <h3> Add New Stock Item</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({name: e.target.value})}
                        />
                </div>
                <div className="form-group">
                 <label htmlFor="quantity">Quantity</label>
                 <input
                     type="text"
                     className="form-control"
                    id="quantity"
                    value={form.quantity}
                    onChange={(e) => updateForm({ quantity: e.target.value })}
                     />
                 </div>
                 <div className="form-group">
                 <label htmlFor="price">Price</label>
                 <input
                     type="text"
                     className="form-control"
                    id="price"
                    value={form.price}
                    onChange={(e) => updateForm({ price: e.target.value })}
                     />
                 </div>


        
       <div className="form-group">   
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="itemStatus"
             id="itemStatus"
             value="available"
             checked={form.level === "available"}
             onChange={(e) => updateForm({ itemStatus: e.target.value })}
           />
           <label htmlFor="itemStatus" className="form-check-label">Available</label>
            </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="itemStatus"
             id="itemStatus"
             value="out of stock"
             checked={form.level === "out of stock"}
             onChange={(e) => updateForm({ itemStatus: e.target.value })}
           />
           <label htmlFor="itemStatus" className="form-check-label">Out of Stock</label>
         </div>
       </div>

     <div className="form-group">
        
         <input
           type="submit"
           value="Create item"
           className="btn btn-primary"
         />
       </div>
            </form>
        </div>
    );
}
