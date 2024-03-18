import { db } from '../../../db';
export default function SnippetCreatePage(){
    async function createSnippet(formData){
        //this needs to be a server action
        'use server';

        //check and validate the user input
        const title = formData.get('title')//gets from the 'name' property in the form
        const code = formData.get('code')
        //create a new record in the DB
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log(snippet)
        //redirect to the snippets listing page
        redirect('/')
    }
}