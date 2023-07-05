/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { debounce } from '@mui/material/utils';
import { fetchy } from '../../components/fetchy';
import jwt_decode from 'jwt-decode';
import { createJWT } from '../createJWT';
import { getCookie } from '../../components/getCookie';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PlaceIcon from '@mui/icons-material/Place';

export function SearchAddress(props) {
    const headers = {'Content-Type': 'application/json'}
    fetch('https://atlas.microsoft.com/search/address/json?api-version=1.0&countrySet=US&subscription-key=nbaeKPTLIg1Yme-hCVAyw0DToUeuljC811pMgXlqbVY&query=' + props.address)
        .then((res) => res.json())
        .then((data) => {
            console.log('handleFetch data: ' + JSON.stringify(data)) 
            
            const addresses = data.results.filter(result => result.address.streetNumber != null).map(result => ({
                address: result.address.freeformAddress,
                zip: result.address.postalCode,
                state: result.address.countrySubdivision,
                city: result.address.municipality,
                streetName: result.address.streetName,
                streetNumber: result.address.streetNumber,
                key: result.id
            }))
            console.log('handleFetch addresses: ' + JSON.stringify(addresses)) 
            props.setNewAddresses(addresses);
            props.setAddressPosted(false)
        })
        .catch((error) => {
            console.log('handleFetch error: ' + error)
            //props.setError(error)
            props.setAddressPosted(false)
        })
}

export function CreateStep2Status(props) {
    console.log('step2 post token before: ' + getCookie('token')) 
    console.log('step2 email token before: ' + JSON.stringify(jwt_decode(getCookie('token'))))
    
    const token = createJWT('', props.firstName, 'User', jwt_decode(getCookie('token')).userID.toString())

    document.cookie = "token=" + token + "; max-age=" + 60*60*24 + ";"
    console.log('step2 post token after: ' + getCookie('token')) 
    console.log('step2 email token after: ' + JSON.stringify(jwt_decode(getCookie('token'))))
    const headers = {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}
    const addies = {
        firstName: props.firstName, 
        lastName: props.lastName, 
        phone: props.phone,
        address1: props.address.streetNumber,
        address2: props.address.streetName,
        city: props.address.city,
        state: props.address.state,
        zip: props.address.zip
    }
    console.log('addies: ' + JSON.stringify(addies))
    fetchy('http://localhost:5753/api/User/CreateStep2', 'POST', addies, headers)
        .catch((error) => {
                console.log('API error: ' + JSON.parse(error.message).message)
                props.setError('API error: ' + JSON.parse(error.message).message)
                props.setCreateStep2Posted(false)
        })
        .then((data) => {
            console.log('handleFetch create data: ' + JSON.stringify(data)) 
            props.setCreateStep2Posted(false)
            props.setIsCreate(false)
            props.setIsStep2(false)
            props.setIsLoggedIn(true)
            props.setOpen(false)
            props.setUserName(props.firstName)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
            props.setCreateStep2Posted(false)
        })
}

export function CreateStep2Modal(props) {    

    const [addressPosted, setAddressPosted] = useState(false)
    const [createStep2Posted, setCreateStep2Posted] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [value, setValue] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [isValid, setisValid] = useState({phone: false, address: false, fullyValid: false})
    const [newAddresses, setNewAddresses] = useState([])
    const [error, setError] = useState(null)
    const fetch = React.useMemo(
        () =>
          debounce(() => {
            setAddressPosted(true)
          }, 400),
        [],
      );
    useEffect(() => {
        console.log('useeffect hit\n phone: ' + isValid.phone + '\n address: ' + isValid.address + '\n firstName: ' + firstName + '\n lastName: ' + lastName)
        if (isValid.phone && isValid.address && firstName && lastName) {
            console.log('all valid')
            setisValid({...isValid, fullyValid: true})
        }
    }, [isValid.phone, isValid.address, firstName, lastName])

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center', mb: 3}}>
            Create Step 2
            </Typography>
            <Box>
                <TextField 
                    type='text' 
                    id='fname' 
                    name='fname' 
                    className='create-input' 
                    variant="standard"
                    margin='dense' 
                    label='First Name' 
                    onChange={(e) => {setFirstName(e.target.value)}}
                />                         
                <TextField 
                    type='text' 
                    id='lname' 
                    name='lname' 
                    className='create-input' 
                    variant="standard"
                    margin='dense' 
                    label='Last Name' 
                    onChange={(e) => {setLastName(e.target.value)}}
                />
                <MuiTelInput 
                    helperText='Phone'
                    variant='standard' 
                    forceCallingCode 
                    defaultCountry='US' 
                    value={phone} 
                    margin='normal' 
                    onChange={(e) => {console.log('phone valid: ' + matchIsValidTel(e)); setPhone(e); setisValid({...isValid, phone: matchIsValidTel(e)})}}
                />
                <Autocomplete 
                sx={{m: 0}}
                    margin='dense'
                    autoComplete
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log('handlechange target value: ' + JSON.stringify(newValue)) 
                        
                        if (newValue && newValue.streetNumber && newValue.streetName && newValue.city && newValue.state && newValue.zip) {
                            setisValid({...isValid, address: true})
                            console.log('address is valid')
                        }
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                        fetch();
                        }}
                    value={value}
                    className='create-input'
                    filterOptions={(x) => x} 
                    noOptionsText="No locations" 
                    key={option => option.key}
                    options={newAddresses ? newAddresses : []} 
                    getOptionLabel={(option) =>
                        typeof option === 'string' ? option : option.address
                        }
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    renderInput={(params) => <TextField {...params} variant='standard' label="Address" />}
                    renderOption={(props, option) => {
                        return (
                                <ListItem {...props} key={option.key} sx={{backgroundColor: 'background.paper'}}>
                                    <ListItemIcon sx={{minWidth: 40}}>
                                        <PlaceIcon />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={option.streetNumber + ' ' + option.streetName} 
                                        secondary={option.city + ', ' + option.state + ' ' + option.zip}
                                    />
                                </ListItem>
                        )
                    }}
                />
                {error && <div>{error}</div>}
                {isValid.fullyValid  ?

                <Button  
                    sx={{ minWidth: 75, mx: 'auto', display: 'block', mt: 4 }} 
                    variant="contained" 
                    onClick={() => setCreateStep2Posted(true)}
                >
                    Submit
                </Button>
                :
                <Button  
                    sx={{ minWidth: 75, mx: 'auto', display: 'block', mt: 4 }} 
                    variant="contained" 
                    disabled
                >
                    Submit
                </Button>
                }
                
                {addressPosted && 
                    <SearchAddress 
                        setError={(error) => setError(error)} 
                        setAddressPosted={(data) => setAddressPosted(data)} 
                        setNewAddresses={(data) => setNewAddresses(data)}
                        address={inputValue}    
                    />}
                {createStep2Posted && 
                    <CreateStep2Status 
                        firstName={firstName}
                        lastName={lastName}
                        phone={phone}
                        address={value} 
                        isActive={props.isActive}
                        setIsCreate={(data) => props.setIsCreate(data)}
                        setError={(error) => setError(error)} 
                        setCreateStep2Posted={(data) => setCreateStep2Posted(data)} 
                        setOpen={(data) => props.setOpen(data)}
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setIsStep2={(data) => props.setIsStep2(data)}
                        setUserName={(data) => props.setUserName(data)}
                    />}
            </Box>
        </>
    )
}