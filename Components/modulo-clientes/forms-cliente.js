import {postData,putData,opc} from '../../Apis/clientes-api.js';

				export class FormCliente extends HTMLElement{
				    constructor(){
					super();
					this.render();
					this.saveData();
				    }
				    render(){
					this.innerHTML=/*html*/`
					<div class="card">
					    <h5 class="card-header">Registro de clientes</h5>
					    <div class="card-body">
						<div class="container">
						    <div class="row g-3">
							<div class="col-12">
							    <form id = "frmData">
								<div class="row g-3">
									<div class="col-4">
										<label for="cc" class="form-label">Documento del cliente</label>
										<input type="text" class="form-control" id="cc" name="cc">
									</div>
								    <div class="col-4">
								        <label for="nombres" class="form-label">Nombres del cliente&nbsp;</label>
								        <input type="text" class="form-control" id="nombres" name="nombres">      
								    </div>
								    <div class="col-4">
								        <label for="apellidos" class="form-label">Apellidos del cliente&nbsp;</label>
								        <input type="text" class="form-control" id="apellidos" name="apellidos">      
								    </div>
								</div>

								<div class="row g-3">
									<div class="col-4">
										<label for="fechanac" class="form-label">Fecha Nacimiento</label>
										<input type="date" class="form-control" id="fechanac" name="fechanac"> 
									</div>
									<div class="col-4">
								        <label for="telefono" class="form-label">Número de contacto</label>
								        <input type="text" class="form-control" id="telefono" name="telefono">
								    </div>
									<div class="col-4">
								        <label for="email" class="form-label">Email del cliente &nbsp</label>
								        <input type="email" class="form-control" id="email" name="email">
								    </div>
								</div>
									
								<div class="row g-3">
								    
								    <div class="col-6">
								        <label for="ciudad" class="form-label">Ciudad de origen &nbsp</label>
								        <input type="text" class="form-control" id="ciudad" name="ciudad">       
								    </div>
								    <div class="col-6">
								        <label for="pais" class="form-label">País de nacimiento</label>
								        <input type="text" class="form-control" id="pais" name="pais"> 
								    </div>
								</div>
								<div class="container mt-4 text-center">
								    <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar cliente">
								</div>
							    </form>                         
							</div>
						    </div>
						</div>
					    </div>        
					</div>
					`
					
				    }
				    saveData =()=>{
					let myForm=document.querySelector("#frmData");
					myForm.addEventListener("submit",(e)=>{
					    e.preventDefault();
					let data=Object.fromEntries(new FormData(e.target));
					opc[e.submitter.dataset.accion](data)
					})
				    }
				}
				 customElements.define("form-cliente",FormCliente);