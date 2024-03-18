import { db } from "../db";
import Link from "next/link";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet)=>{
    return (
      <div key={snippet.id} className="flex justify-between border rounded p-2">
        <h3>{snippet.title}</h3>
        <Link href={`/snippets/${snippet.id}`} className="font-bold">View</Link>
      </div>
    )
  })
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border rounded p-2">New</Link>
      </div>
        <div className="flex flex-col gap-2">{renderedSnippets}</div>       
    </div>
  )
}
