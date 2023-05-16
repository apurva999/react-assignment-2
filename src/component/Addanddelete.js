import {useState} from 'react';
import "./addanddelete.css"
export default function Add(){

const [name, setname]=useState("")    

const [students,setstudents]=useState(["rajann","Ankit","Rahul"])


const handleSubmit=(event)=>{
    event.preventDefault();
    setstudents(newperson=>[...newperson,name])
    setname('');
}
const handleDelete=(deletestudent)=>{
   const newstudent=students.filter((student)=> student !== deletestudent);
   setstudents(newstudent);
}
    return(
        <div className="Main">
            <form onSubmit={handleSubmit}>
                <input className='input' type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                </form>
                <div className='studname'>
                    {
                        students.map((student,index)=><div key={index}>{student}<button className='btn' onClick={()=>handleDelete(student)}>Delete</button></div>)
                    }
                </div>
        
        </div>
    )
}