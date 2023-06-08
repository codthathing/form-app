window.addEventListener("load", ()=> {
    const params = (new URL(document.location)).searchParams;
    const fullName = params.get('fullName')
    const email = params.get('email')
    const phoneNumber = params.get('phoneNumber')
    const file = params.get('file')
    const jobTitle = params.get('jobTitle')

document.getElementById('name').innerHTML = fullName
document.getElementById('email').innerHTML = email
document.getElementById('phone').innerHTML = phoneNumber
document.getElementById('job').innerHTML = jobTitle
document.getElementById('file').innerHTML = file

// USING POST METHOD
// document.getElementById('job').innerHTML = localStorage.getItem('JOB')
// document.getElementById('file').innerHTML = localStorage.getItem('FILE')
})