import './App.css';
import { useState } from 'react';
function App() {

  let [name, setname] = useState("");
  let [result, setresult] = useState([]);
  let [edit, setedit] = useState();
  let [reset, setreset] = useState([]);
  let [search, setsearch] = useState("");

  const addbtn = () => {
    if (edit) {
      const updatedResult = [...result];
      updatedResult[edit].name1 = name;
      setresult(updatedResult);
      // setedit(undefined);
    } else 
    {
      setresult([...result, { name1: name, completed: false }]);
      setreset([...reset, { name1: name, completed: false }]);
    }
    setname("");
  }
  const btndel = (index) => {
    const del = result.filter((item,i) => i !== index);
    setresult(del);
    setreset(del);
  }
  const btnedit = (index) => {
    setname(result[index].name1)
    setedit(index);
  }
  const checkbtn = (index) => {
    const demo = [...result];
    demo[index].completed = !demo[index].completed;
    setresult(demo);
    setreset(demo);
  }

  const Clickbtn = () => {
    let info = [...reset];
    var data = info.filter((item, index) => {
      return item.name1 === search;
    })
    setresult(data);
    setsearch("");
  };

  const allbtn = () => {
    setresult([...reset]);
  }
  
  const combtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed == true;
    })
    setresult(completebtn);
  }

  const uncombtn = () => {
    let completebtn = reset.filter((item,index)=>{
      return item.completed == false;
    })
    setresult(completebtn);
  }
  return (
    <div>
      <h2 className='title'>TO-DO-LIST...!!</h2>
      <div className="App">
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Task' className='name'></input>
        <input type="button" value="ADD" onClick={addbtn} className='btn'></input>
        <div className='all'>
          <ul className='one'>
            <input type='text' value={search} placeholder='Search' onChange={(e) => setsearch(e.target.value)} ></input>
            <input type='button' value={"Click"} onClick={Clickbtn} className='btn'></input>
            <input type='button' value={"Completed"} onClick={combtn} className='btn'></input>
            <input type='button' value={"Uncompleted"} onClick={uncombtn} className='btn'></input>
            <input type='button' value={"All"} onClick={() => allbtn()} className='btn'></input>
            {
              result.map((item, index) => (
                <li key={index} className='one_1'>
                  <input type='checkbox' onClick={() => checkbtn(index)} checked={item.completed} className='check'></input>
                  <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.name1}</span>
                  <input type='button' value={"Delete"} onClick={() => btndel(index)} className='btn'></input>
                  <input type='button' value={"Edit"} onClick={() => btnedit(index)} className='btn'></input>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;