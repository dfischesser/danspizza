
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NextLinkComposed } from './Link';

export function LiveStatus(props) {
    console.log('fetching youtube')
    const headers = { 'Content-Type': 'application/json' }
    fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/User/Live' : 'danspizza-api.azurewebsites.net/api/User/Live', {headers: headers})
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            props.setDataPosted(false)
        })
        .then((res) => { return res.text()
        })
        .then((data) => {
            console.log('live? ' + JSON.parse(data).message)
            if (JSON.parse(data).message === true) {
                console.log('yep')
                props.setLive(true)
            }
            props.setLivePosted(false)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError(error.message)
            props.setLivePosted(false)
        })
}

export default function CheckLive({live, setLive}) {

    const [livePosted, setLivePosted] = useState(true);
    const [error, setError] = useState(null)


    return (
        <Box>
            {live && <Button onClick={() => setLivePosted(true)}>Live Now!</Button>}
        {livePosted &&
            <LiveStatus
                setLivePosted={(data) => setLivePosted(data)}
                setLive={(data) => setLive(data)}
                setError={(data) => setError(data)}
            />}
        {error && <Box>{error}</Box>}
        </Box>
    )
}