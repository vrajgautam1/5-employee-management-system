import React, { useEffect, useState } from "react";
import Table from "./components/table";
import Form from "./components/form";

function App() {

    const [editingEmp, setEditingEmp] = useState({})
    const [employeesList, setEmployessList] = useState(()=>{
        let stored = JSON.parse(localStorage.getItem("employees"))
        if(stored){
            return stored
        }else{
            return []
        }
    });

    useEffect(()=>{
        try {
            localStorage.setItem("employees", JSON.stringify(employeesList))
        } catch (error) {
            console.log(error);
        }
        
        
    }, [employeesList])

    return (
        <div className="container mt-5">
            <Form employeesList={employeesList} setEmployessList={setEmployessList} editingEmp={editingEmp} setEditingEmp={setEditingEmp}/>
            <Table employeesList={employeesList} setEmployessList={setEmployessList} editingEmp={editingEmp} setEditingEmp={setEditingEmp}/>
        </div>
    );
}

export default App;
