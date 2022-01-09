import React, { useState } from 'react'
import { CREATE_AUDIT_MUTATION } from "./../graphQL/mutations";
import { useMutation } from '@apollo/client'
import './createlog.css'

function CreateLog() {
    const [severity, setSeverity] = useState('')
    const [component, setComponent] = useState('')
    const [context, setContext] = useState('')
    const [message, setMessage] = useState('')
    const [tag, setTag] = useState('')

    const [createLog, { error }] = useMutation(CREATE_AUDIT_MUTATION);

    const addAudit = () => {
        console.log(severity);
        createLog({
            variables: {
                severity: severity,
                component: component,
                context : context,
                message: message,
                tag : tag
            }
        }).then(()=>{
            alert('Audit Added')
            window.location.reload()
        })



        if(error){
            alert(error)
        }
    }

    return (
        <div className='create-log-body'>
            <input
                type="text"
                placeholder='Severity'
                onChange={(e) => {
                    setSeverity(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder='Component'
                onChange={(e) => {
                    setComponent(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder='Context'
                onChange={(e) => {
                    setContext(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder='Message'
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder='Tag'
                onChange={(e) => {
                    setTag(e.target.value)
                }}
            />
            <button onClick={addAudit}>Create Audit</button>
        </div>
    )
}

export default CreateLog
