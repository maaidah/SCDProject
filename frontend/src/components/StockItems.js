import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Stock = (props) => ( //Record
 <tr>
   <td>{props.stock.name}</td>
   <td>{props.stock.quantity}</td>
   <td>{props.stock.price}</td>
   <td>{props.stock.itemStatus}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.stock._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteStock(props.stock._id);
       }}
     >
       Delete 
     </button>
   </td>
 </tr>
);

export default function StockList() {
    const [stockItems, setStock] = useState([]); //records
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getStock() {
        const response = await fetch(`http://localhost:3001/stock/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const stockItems = await response.json();
        setStock(stockItems); //setRecords(records)
      }
    
      getStock();
    
      return;
    }, [stockItems.length]); //records
 
    // This method will delete a record
    async function deleteStock(id) {
      await fetch(`http://localhost:3001/${id}`, {
        method: "DELETE"
      });
    
      const newItem = stockItems.filter((el) => el._id !== id);
      setStock(newItem);
    }
    
    // This method will map out the records on the table
    function stockList() { //recordList
      return stockItems.map((stock) => {
        return (
          <Stock
          stock={stock}
            deleteStock={() => deleteStock(stock._id)}
            key={stock._id}
          />
        );
      });
    }
    // This following section will display the table with the records of individuals.
 return (
    <div>
      <h3>Stock Items List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>itemStatus</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{stockList()}</tbody>
      </table>
    </div>
  );
 }