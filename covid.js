let country=document.querySelector('#country');

let container=document.querySelector('.container')




//აპიდან წამოვიღე ინფორმაცია//
axios.get('https://covid-api.mmediagroup.fr/v1/cases').then(function(response){
    console.log(response.data)
    console.log(Object.keys(response.data))   //ობიექტი გადავაქციე მასივად.//
    let countryOptions = Object.keys(response.data) //ახალ ცვლადს გავუტოლე მასივად გადაქცეული ობიექტი//
    for(i=0;i<countryOptions.length;i++){  //for ლუპით ჩამოვუარე ახალ ცვლადს,რომელშიც შევინახე ობიექტი//
        console.log(countryOptions[i]);
        
        let option=document.createElement('option'); //ვქმნი ახალ ცვლადს,რომელშიც ვინახავ js-ში შექმნილ ელემენტს.
        country.appendChild(option); //მთავარ ცვლადს ვაშვილებინე, აქ შექმნილი ელემენტი//
        option.innerText=countryOptions[i] //ახალ ელემენტს ვეუბნები,რომ ტექსტად ჩაიწეროს ცვლადი,რომელშიც შენახული მაქვს მასივის თითოეული ელემენტი[I];
    }




    // let global=document.createElement('global');  //შევქმენი გლობალური ინფორმაცია
    // global.classList.add('global');
    // let confirmed=document.createElement('p');
    // let death=document.createElement('p');
    // let population = document.createElement('p');
    // let recovered = document.createElement('p');
    // container.appendChild(country)
    // country.appendChild(global)


});
 



