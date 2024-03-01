const shape = document.getElementById('shape');
const color = document.getElementById('color');
const heading = document.getElementById('heading');
const container = document.getElementById('container');
const colorName = document.getElementById('colorName');



let random = () => {
    let rColor = Math.floor(Math.random() * 18898876655438653435).toString(16).slice(0, 6);
    return "#"+rColor;
}

color.addEventListener('click', () =>  {
    let colorRGB = random()
    heading.style.backgroundColor = colorRGB;
    colorName.innerHTML = `Color value of outer container is : ${colorRGB}`
  
})
let counter = 0;

shape.addEventListener('click' , () => {
    container.style.backgroundColor = random();
    container.classList.remove('demo');
    // container.classList.add('circle');
    if(counter==0){
        container.classList.add('square');
        container.classList.remove('triangle')

        counter+=1;
    }else if(counter==1){
        container.classList.remove('square');
        container.classList.add('circle');
        counter+=1;
        
    }else if(counter == 2){
        container.classList.add('rectangle');
        container.classList.remove('circle');
        counter+=1;

    }else{
        container.classList.add('triangle');
        container.classList.remove('rectangle');
        counter = 0;
    }
})



// console.log(random());