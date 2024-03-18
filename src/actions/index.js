'use server'
import { db } from "../db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
export async function editSnippet(id, code){
    await db.snippet.update({
        where: {id},
        data:  {code}
        
    })
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id){
    await db.snippet.delete({
        where:{id}
    })
    revalidatePath('/')
    redirect('/')
}
export async function createSnippet(formState, formData){
        
    //check and validate the user input
    try{

        const title = formData.get('title')//gets from the 'name' property in the form
        const code = formData.get('code')

        if(typeof(title)!== 'string' || title.length<3){
            return{
                message:'Title must be longer'
            }
        }
        if(typeof(code) !== 'string' || code.length<5){
            return{
                message:'Code must be longer'
            }
        }
        //create a new record in the DB
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log('Snippet Created', snippet)
        // redirect to the snippets listing page
        // throw new Error('Failed to create new snippet.')
        }
    catch(error){
        if(error instanceof Error){
            return{
                message: error.message
            }
        }
        else{
            return{
                message: 'Something went wrong!'
            }
        }
        }
        revalidatePath('/')
        redirect('/')

    }
    
