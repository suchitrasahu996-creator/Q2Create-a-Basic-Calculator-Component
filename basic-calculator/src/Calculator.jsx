import { useState} from "react";

const Calculator =()=>{
    const [count1, setCount1] = useState("");
    const [count2, setCount2] = useState("");
    const [operation, setOperation] = useState("add");
    const [results,setResults] =useState([]);

    const handleCalculate = () =>{
        if (count1 === "" || count2 === "" ) return;
        const a = Number(count1);
        const b = Number (count2);
        let result;

        switch (operation){
            case "add":
                result = a + b ;
                break;
                case "subtract":
                    result = a - b ;
                    break;
                    case "multiply":
                        result = a * b ;
                        break;
                        default:
                            return;
        }
        setResults([...results , result]);

    };
    return (
        <div>
            <h2 style={{color:"blue" , fontSize:"50px"}}>Basic Calculator</h2>
            <input type="number" placeholder="Enter first number" value={count1} onChange={(e)=>setCount1(e.target.value)}/>
    
            <input type="number" placeholder="Enter second number" value={count2} onChange={(e)=>setCount2(e.target.value)}/>

            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                
                <option value="add">Add</option>
                 <option value="subtract">Subtract</option>
                  <option value="multiply">Multiply</option>
                  </select>

                  <button onClick={handleCalculate} style={{borderColor:"black",color:"red", background:"lightblue" }}>Perform Action</button>
                  <h3>Results:-</h3>
                  <ul>
                    {results.map((res,index)=> (
                       <li key={index}>{res}</li> 
                    ))}
                  </ul>
                  
                 
      </div>
    );
};

export default Calculator;
