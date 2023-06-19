
import jws from 'jws'
export function createJWT(email, firstName = '', role = '', userID = '') {
  var date = new Date()
  var tomorrowUnix = (date.setDate(date.getDate() + 1) / 1000) >> 0
  console.log('createJWT email: ' + email + ' firstName: ' + firstName + ' role: ' + role) 
  const pload = {
      email: email, 
      firstName: firstName, 
      role: role, 
      userID: userID, 
      exp: tomorrowUnix, 
      iss: 'danspizza.dev', 
      aud: 'danspizza users'}
      console.log('handleFetch payload: ' + JSON.stringify(pload)) 

  const token = jws.sign({
      header: {alg: 'HS256', typ: "JWT"}, 
      payload: pload,
      secret: 'CR2CQohJrsgoYwMU2lGpQ7BKthH2yYAA',
  })   

  return token
}