import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {GET_LOGS} from './../graphQL/queries'

console.log(GET_LOGS);

function Home() {
    const {error, loading, data } = useQuery(GET_LOGS)
    const [audits, setAudits] = useState([])

    useEffect(()=>{
        if(data){
            setAudits(data.getLogs)
            console.log(data.getLogs)
        }
    }, [data])

    return (
        <div>
            {
                audits.map((val) => {
                    return(
                        <ul>
                            <li><b>Id</b> - {val.id}</li>
                            <li><b>Created At -</b> {val.createdAt}</li>
                            <li><b>Severity -</b> {val.severity}</li>
                            <li><b>Compnent -</b> {val.component}</li>
                            <li><b>Context -</b> {val.context}</li>
                            <li><b>Message -</b> {val.message}</li>
                            <li>
                            <b>Tags -</b> {val.tags}
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Home
