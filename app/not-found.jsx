import Link from "next/link"

export default function NotFound(){
    
    return(
        <main className="text-center">
            <h3 className="text-3xl">Sorry, there was a problem</h3>
            <p>trying to find the page you requested</p>
            <p><Link href='/'>Go to Dashboard</Link></p>
        </main>
    )
}