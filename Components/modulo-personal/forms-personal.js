import {postData,putData,opc} from '../../Apis/clientes-api.js';

				export class FormPersonal extends HTMLElement{
				    constructor(){
					super();
					this.render();
					this.saveData();
				    }
				    render(){
					this.innerHTML=/*html*/`
					<div class="card">
					    <h5 class="card-header">Registro del personal.</h5>
					    <div class="card-body">
						<div class="container">
						    <div class="row g-3">
							<div class="col-12">
							    <form id = "frmData">
								<div class="row g-3">
									<div class="col-4">
										<label for="cc" class="form-label">Documento del personal</label>
										<input type="text" class="form-control" id="cc" name="cc">
									</div>
								    <div class="col-4">
								        <label for="nombres" class="form-label">Nombres del personal&nbsp;</label>
								        <input type="text" class="form-control" id="nombres" name="nombres">      
								    </div>
								    <div class="col-4">
								        <label for="apellidos" class="form-label">Apellidos del personal&nbsp;</label>
								        <input type="text" class="form-control" id="apellidos" name="apellidos">      
								    </div>
								</div>

								<div class="row g-3">
									<div class="col-4">
										<label for="profesion" class="form-label">Profesion</label>
										<input type="text" class="form-control" id="profesion" name="profesion"> 
									</div>
									<div class="col-4">
								        <label for="telefono" class="form-label">Número de contacto</label>
								        <input type="text" class="form-control" id="telefono" name="telefono">
								    </div>
									<div class="col-4">
								        <label for="email" class="form-label">Email del personal &nbsp</label>
								        <input type="email" class="form-control" id="email" name="email">
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
				 customElements.define("form-personal",FormPersonal);