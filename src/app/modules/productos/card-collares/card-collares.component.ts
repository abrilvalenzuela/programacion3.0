import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto'; // importa interfaz
import { CrudService } from 'src/app/modules/admin/services/crud.service'; // importo el servicio crud

@Component({
  selector: 'app-card-collares',
  templateUrl: './card-collares.component.html',
  styleUrls: ['./card-collares.component.css']
})
export class CardCollaresComponent {

  coleccionProductos: Producto[] = [];
  
  productoSeleccionado!: Producto;// va a recibir todos los productos

  modalVisible: boolean = false; // cuando hagas el click se vea igual ahi esta para que no se vea esta declarado para que no se vea pero despues se puede ver, ahora igual no

  collares: Producto[] = []; // va a recibir todos los productos de collares

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })

    this.mostrarCollares();
  }

  mostrarVer(info: Producto){
    //al seleccionar "ver mas" el modal visible para tpdps
    this.modalVisible = true;
    // muestrta la informacion del producto q se seleccione 
    this.productoSeleccionado = info;
  }

  mostrarCollares(){
    this.coleccionProductos.forEach(producto => { // itera la conexion
      /* si la categoria del producto es igual a collaes se va a enviar a la coleccion "collares"
      */
      if(producto.categoria === "collares"){
        this.collares.push(producto);
      }
    })
  }
}