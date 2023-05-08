import { getDataAll } from "../../Apis/clientes-api.js";

				export class ListaCliente extends HTMLElement{
				    idUsr=0;
				    constructor(){
					super();
					this.render();
					this.requestApiGetCliente();
					this.abrirModal();
					
				    }
				    render(){
					this.innerHTML = /* html */ `
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Nro Documento</th>    
								<th>Nombres</th>
								<th>Apellidos</th>
								<th>Email</th>
								<th>Telefono</th>
								<th>País</th>
								<th>Ciudad</th>
								<th></th>
							</tr>
						</thead>
						<tbody id="lista-clientes">

						</tbody>
					</table>
					`
				    }

					abrirModal = () =>{
						var myModal = document.querySelector('#putCliente')
						myModal.addEventListener('shown.bs.modal', function () {
							//myInput.focus()
						})
					}

				    requestApiGetCliente = () =>{
					getDataAll()
					    .then((result)=>{
						this.renderClientes(result);
					    })
				    }
				    renderClientes = (clientes)=>{
					let clientesHTML = '';
					for(let cliente of clientes){
					    clientesHTML += this.crearListaClientesHTML(cliente);
					}
					document.getElementById('lista-clientes').innerHTML = clientesHTML;
					this.callModal();
					this.putData();
				    }
				    crearListaClientesHTML = (clientes)=>{
					let listaHTML = /* html */ `
						<tr>
							<td>${clientes.id}</td>
							<td>${clientes.cc}</td>
							<td>${clientes.nombres}</td>
							<td>${clientes.apellidos}</td>
							<td>${clientes.email}</td>
							<td>${clientes.telefono}</td>
							<td>${clientes.pais}</td>
							<td>${clientes.ciudad}</td>
							<td>
								<a class="btn btn-success " data-bs-toggle="modal" data-bs-target="#cliente" id="putData" data-idcli='${clientes.id}'><i class='bx bx-edit-alt icono' data-idcli='${clientes.id}'></i></a>
								<a class="btn btn-danger" data-idclidel='${clientes.id}'><i class='bx bx-message-alt-x icono'></i></a>
							</td>
						</tr>
					`;
					return listaHTML;
				    }
				    callModal = () =>{
					document.querySelectorAll('#putData').forEach((item,id) =>{
					    item.addEventListener("click",(e) =>{
						this.idUsr=e.target.dataset.idcli;
						this.requestApiGetClienteById(e.target.dataset.idcli);
						e.stopImmediatePropagation();
						e.preventDefault();
					    })
					})
				    }
				    requestApiGetClienteById = (id) =>{
					searchDataById(id)
					    .then((result)=>{
						this.loadDataFrm(result);
					    })
				    }
				    loadDataFrm(data){
					
					const myForm = document.querySelector("#frmData");
					const {cc,nombres,apellidos,email,telefono,id} = data;
					const frm = new FormData(myForm);
					frm.set("cc",cc);
					frm.set("nombres",nombres);
					frm.set("apellidos",apellidos);
					frm.set("email",email);
					frm.set("telefono",telefono);

					
					// Itera a través de los pares clave-valor de los datos
					for (var pair of frm.entries()) {
					    // Establece los valores correspondientes en el formulario
					    myForm.elements[pair[0]].value = pair[1];
					}

				    }
				    putData = (id) =>{
					let myForm = document.querySelector("#frmData");
					myForm.addEventListener("submit", (e)=>{
					    e.preventDefault();
					    let data = Object.fromEntries(new FormData(e.target));
					    opc[e.submitter.dataset.accion](data,this.idUsr);  
					})
				    }

				}
				customElements.define("lista-cliente",ListaCliente);