export function createRegistrationData() {
  return {
    testId: new Date().getTime(),
    email: 'ebenezer.ashong+' + new Date().getTime() + '@amalitech.com',
    password: '123456aA_',
    passwordRepeat: '123456aA_',
    salutation: '0',
    firstName: 'Ebenezer',
    lastName: 'Ashong',
    street: 'Amakroma Street',
    zipCode: '9000',
    city: 'Takoradi',
    language: 'En',
    rememberMe: false,
    cumulusNr: '',
    newsletter: false,
    phone: '+233 50 970 32 94',
    company: 'Amalitech',
  }
}
