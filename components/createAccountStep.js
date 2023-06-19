/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/AutoComplete'
import TextField from '@mui/material/TextField'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { debounce } from '@mui/material/utils';
import { fetchy } from '../components/fetchy';
import jwt_decode from 'jwt-decode';
import { createJWT } from './createJWT';

function Header({ title }) {
    return <h5 className='padding login-header'>{title ? title : 'Default title'}</h5>;
  }

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
    // var date = new Date()
    // var tomorrowUnix = (date.setDate(date.getDate() + 1) / 1000) >> 0
    // const pload = {
    //     email: jwt_decode(getCookie('token')).email, 
    //     firstName: props.firstName, role: 'User', 
    //     userID: jwt_decode(getCookie('token')).userID.toString(), 
    //     exp: tomorrowUnix, iss: 'danspizza.dev', 
    //     aud: 'danspizza users'
    // }
    
    // const token = jws.sign({
    //     header: {alg: 'HS256', typ: "JWT"}, 
    //     payload: pload,
    //     secret: 'CR2CQohJrsgoYwMU2lGpQ7BKthH2yYAA',
    // })
    
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
            props.setIsActive({...props.isActive, login: false})
            props.setUserName(props.firstName)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError('React fetch error: ' + error.message)
            props.setCreateStep2Posted(false)
        })
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export function CreateAccountStep(props) {    

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
        console.log('useeffect hit')
        if (isValid.phone && isValid.address && firstName && lastName) {
            console.log('all valid')
            setisValid({...isValid, fullyValid: true})
        }
    }, [isValid.phone, isValid.address, firstName, lastName])

    return (
        <div className='login-wrapper'>
            <div className='login-body'>
                <div className='login-segment'>
                    <div className='login-title'>
                        <Header title="Create Account"/>
                    </div>
                    <div className='login-body'>
                        <form>
                            <TextField type='text' id='fname' name='fname' className='create-input' margin='dense' label='First Name' onChange={(e) => {setFirstName(e.target.value)}}></TextField>                            
                            <TextField type='text' id='lname' name='lname' className='create-input' margin='dense' label='Last Name' onChange={(e) => {setLastName(e.target.value)}}></TextField>                            
                            <MuiTelInput forceCallingCode defaultCountry='US' value={phone} margin='dense' onChange={(e) => {setPhone(e); setisValid({...isValid, phone: matchIsValidTel(e)})}}></MuiTelInput>
                            <Autocomplete 
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
                                renderInput={(params) => <TextField {...params} label="Address" />}
                                renderOption={(props, option) => {
                                    return (
                                        <li {...props} key={option.key}>
                                            {option.address}
                                        </li>
                                    )
                                }}
                            />
                        </form>
                        {error && <div>{error}</div>}
                        <button 
                        className='login-button' onClick={() => setCreateStep2Posted(true)}>Submit</button>
                    </div>
                </div>
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
                        setIsActive={(data) => props.setIsActive(data)} 
                        setIsLoggedIn={(data) => props.setIsLoggedIn(data)}
                        setIsStep2={(data) => props.setIsStep2(data)}
                        setUserName={(data) => props.setUserName(data)}
                    />}
            </div>
        </div>
    )
}