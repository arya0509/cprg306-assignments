import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-2"}>Week-2 page </Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-3"}>Week-3 page</Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-4"}>Week-4 page</Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-5"}>Week-5 page</Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-6"}>Week-6 page</Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-7"}>Week-7 page</Link>
      <br></br>
      <Link className="hover:text-green-600" href={"http://localhost:3000/week-8"}>Week-8 page</Link>
   
    </main>
    
  );
}
