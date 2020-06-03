const navSlide = () =>
{
    const lines= document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');


    const navlinks  = document.querySelectorAll('.nav-links li');

    lines.addEventListener('click',() => {
     nav.classList.toggle('nav-active');


     navlinks.forEach((link , index) => {

        if(link.style.animation)
        {
           link.style.animation='';
        }
        else{
            link.style.animation = `navlinkfade 0.5s ease forwards ${index /7+0.5}s`; 

        }


}); 
    });

    
    
}


//to add animation to each link seperately



navSlide();
