'use client'
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '../actions'
export default function SnippetEditForm({snippet}){
    const [code, setCode] = useState()
    const handleEditorChange =(value, event)=>{
       setCode(value)
    }
    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)
  
    return <div>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{minimap:{enabled: false}}}
        onChange={handleEditorChange}
        />
        <form action={editSnippetAction}>
            <button className="p-2 border rounded">Save</button>
        </form>
        </div>
}