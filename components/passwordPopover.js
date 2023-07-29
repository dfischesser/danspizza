import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import DoneIcon from '@mui/icons-material/Done';
import { useRef } from 'react'

export default function PasswordPopover({ validationArray }) {

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    return (
        <Paper component='div'>
            <List
                sx={style}
                component='div'
                subheader={
                    <ListSubheader component='div' id="nested-list-subheader" >
                        <Typography sx={{ pl: 2, pt: 2 }} component='div'>Password Rules</Typography>
                    </ListSubheader>
                }>
                <Typography sx={{ px: 2 }} component='div'>
                    {
                        validationArray.map((val, index) => (
                            <div key={index}>
                                <ListItem disableGutters sx={{ maxWidth: 175 }}>

                                    {val.active ?
                                        <ListItemIcon sx={{ minWidth: 30, color: 'red' }}>
                                            <CloseIcon fontSize='small' />
                                        </ListItemIcon> :
                                        <ListItemIcon sx={{ minWidth: 30, color: 'green' }}>
                                            <DoneIcon fontSize='small' />
                                        </ListItemIcon>

                                    }

                                    <ListItemText
                                        primary={val.text}
                                        primaryTypographyProps={{ fontSize: '.75rem' }}
                                    />
                                </ListItem>
                                {index !== (validationArray.length - 1) && <Divider variant='middle' component='li' />}
                            </div>
                        ))
                    }
                </Typography>
            </List>
        </Paper>
    );
}