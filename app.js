const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i =0; i < sectBtn. length; i++){
        
        (function(i){
            sectBtn[i] .addEventListener('click', function(){
                for(let j =0; j < sectBtn. length; j++){
                    console.log(i,j);
                    if(i===j){
                        sections[i].style.display="block";
                        sectBtn[i].classList.add("btn-active")
    
                    }else{
                        sections[i].style.display="none";
                        sectBtn[i].classList.remove("btn-active")
                    }
                }
    
    
            })

        })(i)
      
    }
}
//sections Active class

PageTransitions();