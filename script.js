const search = document.getElementById('search');

const copy=document.getElementById('copy')

function genratepass() {
    let password = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890()$!@#&';
    let lenght = 8;
    for (let i = 0; i < lenght; i++) {
        let random=Math.floor(Math.random() * chars.length)
        password += chars.charAt(random)
    }
    search.value=password;
}
copy.addEventListener('click',()=>{
    if(search.value){
       search.select();

       navigator.clipboard.writeText(search.value)
       .then(()=>{
        alert(`Password Copied '${search.value}'`)
       })
    }
})


