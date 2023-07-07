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
                        sections[j].style.display="block";
                        sectBtn[j].classList.add("btn-active")
    
                    }else{
                        sections[j].style.display="none";
                        sectBtn[j].classList.remove("btn-active")
                    }
                }
    
    
            })

        })(i)
      
    }
}
//sections Active class

PageTransitions();