

import rotes from './route';

class Route {
    constructor({initial}){
        this.routes = rotes;
        this.initial = initial || '#/index'
    }
    init(){
        this.initialLoacl();
        this.listenHashChange();
    }

    initialLoacl(){
        if(!location.hash){
            location.hash = this.initial;
            console.log('ok')
        }
    }

    listenHashChange(){
        window.addEventListener('load',this.refresh.bind(this));
        window.addEventListener('hashchange',this.refresh.bind(this))
    }
    
    refresh(){
        let hash = location.hash; //?
       
        if(!this.routes[hash]){
            location.hash = this.initial;
            return ;
        }
        this.routes[hash].render();
        this.switchActive();
    }

    switchActive(){
        $('.nav-link').each(function(){
           if($(this).attr('path') == location.hash){
                $(this).addClass('active');
           }else{
               $(this).removeClass('active');
           }
        })
        // $('.nav-link').each((item,value)=>{
        //     console.log(this)
        //     console.log($(value))
        //     if($(value).attr('path') == location.hash){
        //         $
        //     }
        // })
        
    }
}
export default Route;