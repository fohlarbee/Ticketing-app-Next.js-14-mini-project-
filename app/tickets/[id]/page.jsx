import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets');

    const tickets = await res.json();

    return tickets.map((ticket) => ({
        id:ticket.id
    }));
}

const getTicket = async (id) => {
    
    const res = await fetch('http://localhost:4000/tickets/'+ id, {
        next:{revalidate:60}
    });

    if(!res.ok)
        notFound();

    return res.json();

    
}

export default async function TicketDetails({params}) {
    const ticket = await getTicket(params.id);
    console.log('this is ticket',ticket);
    
  return (
    <main>
        <nav>
            <h3>Ticket details</h3>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div  className={`pill ${ticket.priority}`}>
                <h3>{ticket.priority} priority</h3>
            </div>

        </div>
    </main>
   
  )
}
