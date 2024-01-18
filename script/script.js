// const IdNumber = document.querySelector("#IdNumber");
// const advice = document.querySelector("#advice");

// window.onload =()=>{
//     getAdvice();
// }


// function getAdvice (){
//     fetch ('https://api.adviceslip.com/advice').then(response =>{
//     return response.json();
// }).then (adviceData =>{
//     const Adviceobject = adviceData.slip;
//     const IdAdvice = adviceData.slip.id;

//     advice.innerHTML = Adviceobject.advice;
//     IdNumber.innerHTML = IdAdvice.slip_id;
// }).catch(error =>{
//     console.log(error);
// });
// }



const fetchAdvice = async () =>{
    const res = await fetch( "https://api.adviceslip.com/advice")
    const data = await res.json() 
    
    console.log (data)
    document.getElementById("Idnumber").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("advice").innerHTML = `"${data.slip.advice}"`
}


fetchAdvice()





