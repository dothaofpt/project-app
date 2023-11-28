import React,{useState} from "react";
function RegisterFrom(){
    // kiem soat thanh phan trong form 
    //thong qua useState Components
    const[inputs,setInput] = useState({});
    const handleChange =(event)=>{
        const name= event.target.name;
        const value=event.target.value;
        console.log(name);
        console.log(value);
        setInput(values => ({values,[name]:value}))
    }
    const handleSubmit=(event) =>{
        // kiểm soát bất đồng bộ sự kiện ,đảm bảo các sự kiện không diễn ra đồng thời
        event.preventDefault();
        console.log(inputs);
    }
    return(
        <div>
<form onSubmit={handleSubmit}>
    <label>
        Enter your name:<input 
        type ="text"
        name="usename"
        value={inputs.userName }
        onChange={handleChange}
        />
    </label>
    <br/>
    <label>
        Enter your age:<input 
        type ="number"
        name="age"
        value={inputs.age || " "}
        
        onChange={handleChange}
        />
    </label>
    <br/>
    <input type="submit"/>
</form>
        </div>
    )
}
export default RegisterFrom;