const cabecalhoNav = document.querySelectorAll('.cabecalho nav a');

document.addEventListener('click', e => {

    const el = e.target;

    for(navA of cabecalhoNav){
        if(navA == el){
            e.preventDefault();
            const href = navA.getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
        }
    }

})