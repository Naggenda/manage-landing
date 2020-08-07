// my script

function myfunction(v) {
    var nav_links_hidden=document.getElementById('nav-links-hidden');
    if(nav_links_hidden.style.display=='block')
    {
         var btn_start =document.getElementById('btn-start');
         btn_start.style.display = 'block';
        
         nav_links_hidden.style.display = 'none';
    
        var btn_close =document.getElementById('btn-close');
        btn_close.style.display = 'none';
        
        
        
    }
    else{
        var btn_close=document.getElementById('btn-close');
        btn_close.style.display = 'block';

        nav_links_hidden.style.display = 'block';
    
         var btn_start=document.getElementById('btn-start');
         btn_start.style.display = 'none';
    }
    }