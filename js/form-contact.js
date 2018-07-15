export class FormContact {
    constructor() {
        // elementos del DOM
        this.oTextoMessageInput = document.querySelector('#text-form');
        this.oRestoTextoMessageInput = document.querySelector('#res');
        this.oSelectSeleccion = document.querySelector('#selection');
        this.oOtroHiden = document.querySelector('#form-otro');

        this.oFormContact = document.querySelector('#Contacto');
        this.oInputName = document.querySelector('#name-form');
        this.oInputEmail = document.querySelector('#mail');
        this.oInputPhone = document.querySelector('#phone');
        // this.oOtro = document.querySelector('#otros');
        //this.oTextMessage = document.querySelector('#message')
        //this.oSelectSeleccion = document.querySelector('#selection')
        this.oData = {
            name: '',
            email: '',
            phone: '',
            seleccion: '',
            message: ''
        };
        
        // Manejadores de eventos
        this.oTextoMessageInput.addEventListener('input', this.wordCount.bind(this));
        this.oTextoMessageInput.addEventListener('change', this.wordCount.bind(this));
        this.oSelectSeleccion.addEventListener('change',this.otroSlect.bind(this));

        this.oFormContact.addEventListener('submit', this.leerContact.bind(this));
        //this.definirValidaciones();

    }
    leerContact(oE) {
        oE.preventDefault();
        if (this.validar()) {
            this.guardarDatos();
        }
    }
    
    validar() {
        return true;
    }

    definirValidaciones() {
        this.oInputName.setCustomValidity('El nombre es obligatorio');
        this.oTextoMessageInput.setCustomValidity('El texto introducido no puede tener más de 150 palabras.');
        console.dir(this.oInputName.validity);
        console.dir(this.oInputEmail.validity);

    }

    guardarDatos() {
        this.oData = {
            name: this.oInputName.value,
            email: this.oInputEmail.value,
            phone: this.oInputPhone.value,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value,
            other: this.oOtro.value,
            message: this.oTextoMessageInput.value            
        };

        console.dir(this.oData);
    }

    wordCount(oE) {
        console.dir(oE.target.value);
        let sCadena = oE.target.value;
        const wordTotal = 5;
        
        //Quitamos los saltos de linea
        sCadena = sCadena.replace(/(\r\n|\n|\r)/gm, ' ');
        //Reemplazamos los espacios seguidos por uno solo
        sCadena = sCadena.replace(/[ ]+/g, ' ');
        //Quitarmos los espacios del principio y del final
        sCadena = sCadena.trim();
        //Troceamos el texto por los espacios
        const aCadena = sCadena.split(' ');
        //Contamos todos los trozos de cadenas que existen
        let wordCounter = aCadena.length;

        this.oRestoTextoMessageInput.innerHTML = `${wordCounter} de un máximo de ${wordTotal} palabras`;
             
        if (wordCounter > Math.floor(wordTotal * 0.7)  ){
                        
            this.oRestoTextoMessageInput.classList.add('rojo');
        }  
        
        if (wordCounter >= wordTotal) {
            this.oTextoMessageInput.setAttribute('disabled', true);
            //alert('Alcanzó el numero máximo de Palabras');
            setTimeout(() => {
                console.log('esto es setimeout');
                this.oTextoMessageInput.removeAttribute('disabled');
            }, 3000);
            
            
        }         
        
        
    }
    otroSlect() {
               
        this.oSelectSeleccion.value === 'op4' ? this.oOtroHiden.classList.remove('hide') : this.oOtroHiden.classList.add('hide');
        
        
    }
    
}