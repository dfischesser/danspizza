
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { NextLinkComposed } from './Link';
import { styled } from '@mui/material/styles';

const style = {
    textAlign: 'center',
    my: 'auto'
}

function Bullet() {
    return <Box minHeight={30}><Typography sx={{ my: 'auto', fontWeight: 700, fontSize: 14  }}>|</Typography></Box>
}

export default function Footer() {

    return (
        <Box sx={{ my: 'auto', mx: 'auto', minHeight: 30, maxWidth: 550, fontSize: 14}}>
            <Stack direction={'row'} spacing={3} justifyContent={'space-evenly'} sx={{ my: 'auto' }}>
                <Typography>
                    <Link sx={{ my: 'auto', fontSize: 14 }} underline='hover' href='mailto:dfischesser@gmail.com' target='_blank'>CONTACT</Link>
                </Typography>
                <Bullet/>
                <Typography>
                    <Link sx={{ my: 'auto', fontSize: 14  }} underline='hover' href='https://github.com/dfischesser/danspizza#readme' target='_blank'>GITHUB</Link>
                </Typography>
                <Bullet/>
                <Typography>
                    <Link sx={{ my: 'auto', fontSize: 14  }} underline='hover' href='https://www.linkedin.com/in/dfischesser' target='_blank'>LINKEDIN</Link>
                </Typography>
                <Bullet/>
                <Typography>
                    <Link component={NextLinkComposed} sx={{ my: 'auto', fontSize: 14  }} underline='hover' to='/changelog'>CHANGELOG</Link>
                </Typography>
            </Stack>
        </Box>
    )
}