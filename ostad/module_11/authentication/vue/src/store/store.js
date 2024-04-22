import {ref, reactive} from 'vue'
const authStore = reactive ({
    isAuthenticated: localStorage.getItem('auth') == 1,
    authenticate(username, password){
        fetch('http://localhost:8000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(res => res.json())
        .then(res => {
            console.log(res)
        })
    },
    logout(){
        authStore.isAuthenticated = false
    }
});

export {authStore}