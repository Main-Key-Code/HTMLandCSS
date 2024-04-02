const menuTrigger = document.querySelector('.trigger'),     
    closeTrigger = document.querySelector('.mini-close'),
    giveClass = document.querySelector('.site');

    menuTrigger.addEventListener('click', function() {
        giveClass.classList.toggle('showmenu')
    })
    closeTrigger.addEventListener('click', function() {
        giveClass.classList.remove('showmenu')
    })


    const button = document.querySelectorAll('.has-child > a');
    const modalheight = document.querySelector('menu-list');


    button.forEach((item) => item.parentNode.classList.remove('expand'))
    button.forEach((menu) => menu.addEventListener('click', function() {
        let modal = document.querySelector('.menu-list');
        modal.classList.toggle('show');

        if(this.parentNode.classList != 'expand') {
            this.parentNode.clsslist.toggle('expand')
        }
        
    }))