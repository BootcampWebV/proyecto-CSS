export class Menu {
    constructor(){
        
        this.aMenuItems = document.querySelectorAll("#menu-top a");
        this.aSections = document.querySelectorAll("");
        this.oOffsets = [];
        
        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.activarItem.bind(this)) });
        
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))

        this.prepararNavegacion()
    }
    
    activarItem(oE) {
        console.log('Activando Item')
        this.aMenuItems.forEach(
            (item) => { item.classList.remove('active') }
        )
        oE.target.classList.add('active')
    }

    changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0;
        if (pageOffset >= this.oOffsets['#Portada'] && pageOffset < this.oOffsets['#Quiensoy']) {
            menuItem = 0;
        } else if (pageOffset >= this.oOffsets['#Quiensoy'] && pageOffset < this.oOffsets['#Estudios']) {
            menuItem = 1;
        } else if (pageOffset >= this.oOffsets['#Estudios'] && pageOffset < this.oOffsets['#Experiencia']){
            menuItem = 2;
        } else if (pageOffset >= this.oOffsets['#Experiencia'] && pageOffset < this.oOffsets['#Sobremi']) {
            menuItem = 3;
        } else if (pageOffset >= this.oOffsets['#Sobremi'] && pageOffset < this.oOffsets['#Contacto']) {
            menuItem = 4;
        }
        this.aMenuItems.forEach(
            (item) => item.classList.remove('activar')
        )
        this.aMenuItems[menuItem].classList.add('activar');
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative = this.cumulativeOffset(item);
                this.oOffsets['#' + item.id] = cumulative;
            }
        )

    }

    cumulativeOffset(element) {
        let top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while (element);
        return top;
    };
}