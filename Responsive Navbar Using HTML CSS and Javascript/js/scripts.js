const menuTrigger = document.querySelector('.trigger'),     
    closeTrigger = document.querySelector('.mini-close'),
    giveClass = document.querySelector('.site');

    menuTrigger.addEventListener('click', function() {
        giveClass.classList.toggle('showmenu')
    })
    closeTrigger.addEventListener('click', function() {
        giveClass.classList.remove('showmenu')
    })


    //submenu
    const button = document.querySelectorAll('.has-child > a'),
    modalheight = document.querySelector('.menu-list');

    button.forEach((item) => item.parentNode.classList.remove('expand'));
    button.forEach((menu) => menu.addEventListener('click', function() {
        let modal = document.querySelector('.menu-list');
        modal.classList.toggle('show');

        if(this.parentNode.classList != 'expand') {
           this.parentNode.classList.toggle('expand');
        }

        if( ! modal.classList.contains('show')) {
            modal.style.height = modalheight + 'px';
        } else {
            modal.style.height = (this.parentNode.querySelector('ul').offsetHeight +45) +'px';
        }

        menu.parentNode.querySelector('.back').addEventListener('click', function() {
            // modal.style.height = 'auto';
            // modal.classList.remove('show');
            // menu.parentNode.classList.remove('expand')
        })
        
    }))