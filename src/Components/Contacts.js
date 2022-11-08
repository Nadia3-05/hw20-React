import React from "react";
import CustomerData from '../Components/ContactsData';
import { useState } from 'react';
import Card from '../Components/ContactsCard';
import "../style/Contacts.css";



export const Contacts =() => {
    
    const  [tempData, setTempData] = useState(CustomerData);
    const onSearchChange = (value) =>{
        const newData=CustomerData.filter(cust=>
        cust.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||cust.lastName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||cust.phone.includes(value)
        );
        setTempData(newData);  
    }

    return(
        <div className="Contacts">
            <div className="headerContacts">
               <h2>CONTACTS</h2>
            </div>
        
            <input 
            type="search" 
            placeholder='Search'
            className='inputStyle'
            onChange={e=>onSearchChange(e.target.value)}
            />
            {tempData.map((customer, index)=>(
            <Card userInfo={customer} key={index} />
            ))}
      </div>
  
    )
}