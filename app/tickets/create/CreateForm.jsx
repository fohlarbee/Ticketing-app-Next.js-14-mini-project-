"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"



export default function CreateForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
    
        const ticket = {
            title,
            body,
            priority,
            user_email: 'sammyola346@getMaxListeners.com'
        }
    
        const res = await fetch('http://localhost:4000/tickets', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(ticket)
        });
        if(!res.ok)
            throw Error('unable to create ticket');

        if(res.ok || res.status === 201){
            router.refresh();
            router.push('/tickets')
        }
        
    }

  return (
   <form className="w-1/2" onSubmit={handleSubmit}>
    <label>
        <span>Title:</span>
        <input 
        type="text" 
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}

        />
    </label>
    <label>
        <span>Body:</span>
        <input 
        type="text"
        required
        onChange={(e) => setBody(e.target.value)}
        value={body}
         />
    </label>
    <label>
        <span>Priority:</span>
        <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            
        </select>
    </label>
    <button className="btn-primary text-center">
        {isLoading && <span>Adding Ticket...</span>}
        {!isLoading && <span>Create Ticket</span>}

    </button>

   </form>
  )
}
