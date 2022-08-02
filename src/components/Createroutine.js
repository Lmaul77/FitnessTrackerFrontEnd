import react, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoutine } from '../api';

const CreateRoutine=({name,setName,goal,setGoal})=>{
    const Navigate = useNavigate()
        const handleOnChange =(event) => {
            const changed = event.target.id
            if (changed === 'name'){
                setName(event.target.value)
                console.log(name, 'name')
            }
            if (changed === 'goal') {
                setGoal(event.target.value)
                console.log(goal, "goal")
            }
            // if (changed === 'isPublic') {
            //     setisPublic(event.target.value)
            //     console.log(isPublic, 'i am the isPublic')
            // }
        }
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const token = localStorage.getItem("token")
           const newRoutine= await createRoutine(name, goal);
            setName("");
            setGoal('');
            setisPublic(true);
        
    
        }
    
        return (
            <div className="newPostBox">
                <form onSubmit={handleSubmit}>
                    <div className="formProp">
                    <label>Name: </label>
                    <input 
                        // className="Name"
                        id="Name"
                        onChange={handleOnChange}
                        placeholder="name???"
                        value={name}
                    />
                    </div>
                   
                    <div className="formProp">
                      <label>Goal:  </label>
                    <input
                        // className="Goal"
                        id="Goal"
                        onChange={handleOnChange}
                        placeholder="what's the goal?"
                        value={goal}
                    />   
                   </div>
                   <button type="submit">Post It</button>
                </form>
            </div>
        )
    
    }


export default CreateRoutine