let parent = document.getElementById('details')

setInterval( async ()=> {
    let response = await fetch('/Jackext',{
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json'
        },
    })
    let respjs = await response.json()
    try{
        if(respjs.change == 'yes'){
            let newlen = respjs.newtg.length
            console.log(newlen)
            console.log(respjs.newtg)
            for(let i=newlen - 1; i >= 0; i--){
                let ndiv = document.createElement('div')
                for([key, value] of Object.entries(respjs.newtg[i])){
                    let nspan = document.createElement('span')
                    nspan.innerText = `${key}: ${value}`
                    ndiv.appendChild(nspan)
                }
                parent.appendChild(ndiv)              
                parent.scrollTo(0,10000)
            }
        }
    }catch(e){
        console.log(e)
    }
}, 1500);