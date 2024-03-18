import { db } from "../../../../db"
import { notFound } from "next/navigation"
import SnippetEditForm from "../../../../components/snippet-edit-form"
export default async function SnippetsEditPage(props){
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where: {id: id}
    })
    if(!snippet){
        notFound()
    }
    return <div>
        <SnippetEditForm snippet={snippet}/>
        </div>
}