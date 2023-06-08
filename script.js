const enter=()=>{
    const data = document.getElementById("text").value
    document.getElementById("open").innerText=data
localStorage.getItem('userdata',data)
}

    if(localStorage.userdat){
    document.getElementById('open').innerText=data
    const data=localStorage.getItem('userdata')
    }

const delet=()=>{
    localStorage.removeItem('userdata')
    window.location.reload()
}