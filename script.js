    import {v4} from './node_modules/uuid/dist/esm-browser/index.js';


    export let generatePassword = ()=>{
        const easyRadio = document.querySelector("#easy");
        const mediumRadio = document.querySelector("#medium");
        const hardRadio = document.querySelector("#hard");

        if(easyRadio.checked){
            console.log("easy")
        }else if (mediumRadio.checked){
            console.log("medium")
        }else if(hardRadio.checked){
            console.log("Hard")
        }else{
            console.log("select something")
        }

        var selectedVal = 7;

        if(easyRadio.checked){
            selectedVal = parseInt(easyRadio.value);
        }else if(mediumRadio.checked){
            selectedVal = parseInt(mediumRadio.value);
        }else{
            selectedVal = parseInt(hardRadio.value);
        }

        const password = v4().substr(0, selectedVal);
        console.log(`${password}`)
        let pass = document.getElementById('password')
        pass.value = password

    }

    let button = document.querySelector(".genButton");
    button.addEventListener("click", generatePassword);


