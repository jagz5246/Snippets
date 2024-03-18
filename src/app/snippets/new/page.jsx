'use client'
import {useFormState} from 'react-dom'
import * as actions from '../../../actions'

export default function SnippetCreatePage(){
    const [formState, action] = useFormState(actions.createSnippet, {message:''})
    
    return (
        <form action={action}>
            <h3 className='font-bold m-3'>Create a snippet</h3>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <label className='w-12' htmlFor="title">Title</label>
                    <input className='border rounded p-2 w-full' type="text" name="title" id="title" />
                </div>

                <div className='flex gap-4'>
                    <label className='w-12' htmlFor="code">Code</label>
                    <textarea className='border rounded p-2 w-full' type="text" name="code" id="code" />
                </div>
                <div>
                    {formState.message ? <p className='text-gray-900 px-2 py-2 border rounded border-red-500 bg-red-200'>{formState.message}</p> : ""}
                </div>
                <button type='submit' className='rounded p-2 bg-blue-200'>
                    Create
                </button>
            </div>
        </form>
    )
}

