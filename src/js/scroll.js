var up = document.querySelector('#scroll');

window.addEventListener('scroll', function(){
    var pos = document.documentElement.scrollTop
    if(pos > 300){
        up.classList.add('arrow_up');
        up.addEventListener('click', function(){
            window.scrollTo(0,0);
        });
    }else{
        up.classList.remove('arrow_up');
        up.addEventListener('click', function(){
           var height = document.body.scrollHeight;
           window.scrollTo(0,height);
        });
    }
});

