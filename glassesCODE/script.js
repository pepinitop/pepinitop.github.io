let sceneEl = document.querySelector('a-scene');

let sunGlassesObject = sceneEl.querySelector('#sunGlasses');
sunGlassesObject.setAttribute('visible', false);
const sunGlasses = document.getElementById("sunGlassesBtn");
sunGlasses.addEventListener("click", function(){
    myFunction(sunGlassesObject, sunGlasses)
});


let normalGlassesObject = sceneEl.querySelector('#normalGlasses');
normalGlassesObject.setAttribute('visible', false);
const normalGlasses = document.getElementById("normalGlassesBtn");
normalGlasses.addEventListener("click", function(){
    myFunction(normalGlassesObject, normalGlasses)
});

let woodGlassesObject = sceneEl.querySelector('#woodGlasses');
woodGlassesObject.setAttribute('visible', false);
const woodGlasses = document.getElementById("woodGlassesBtn");
woodGlasses.addEventListener("click", function(){
    myFunction(woodGlassesObject, woodGlasses)
});

let models = [sunGlassesObject, normalGlassesObject, woodGlassesObject]; 

function myFunction(model, btn) {
    if (model.getAttribute('visible')) {
        models.forEach(element => {
            element.setAttribute('visible', false);
        });      
        model.setAttribute('visible', false);
        btn.innerHTML = "Show";  

    }else{
        models.forEach(element => {
            element.setAttribute('visible', false);
        });  
        model.setAttribute('visible', true);
        btn.innerHTML = "Hide";
    }
    visibility =  model.getAttribute('visible')
}
