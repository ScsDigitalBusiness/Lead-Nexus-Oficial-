//area de variáveis
import { Get_APIS_For_Materials } from "./modules/objects.js";
import { Form, ValidationsOfForm } from "./modules/objects.js";
import { SearchBar } from "./modules/searchBar-module.js";
import { URL_IBGE_UF_API } from "./modules/keys.js";


$('.money').mask('000.000.000.000.000,00', {reverse: true});
$('#inputTel').mask('(00) 0000-0000');


document.getElementById('export').addEventListener("click",()=>{
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table"));
})

//MOSTRANDO OS DADOS DA API DE MATERIAIS NO FORMS:
//Pegamos os dados da API Colaborators
//Get_APIS_For_Materials.GetApiColab("responsavel");

//Método ShowMaterial() mostra os materiais de uma API externa.

//Get_APIS_For_Materials.ShowMaterial("material");

//IBGE API :
function showFormLeadRegister () {
  Get_APIS_For_Materials.getUfApi(URL_IBGE_UF_API, "uf");
  document.getElementById("uf").addEventListener('change', () => {
    Get_APIS_For_Materials.getCityApi("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
    $("#uf").val() +
    "/municipios",  'cidade'); 
  })  
}

function showEditLeadRegister() {
  Get_APIS_For_Materials.getUfApi(URL_IBGE_UF_API, "uf_edit");
  document.getElementById("uf_edit").addEventListener('change', () => {
    Get_APIS_For_Materials.getCityApi("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
    $("#uf_edit").val() +
    "/municipios",  'city_edit'); 
  }) 
}

showFormLeadRegister () 

//Search Bar

const table = {
  lines: () => document.getElementsByTagName("tr"),
  coluns: () => document.getElementsByTagName("td"),
};

const searchElement = {
  button: () => document.getElementById("search-button"),
  bar: () => document.getElementById("Search-bar"),
};

const Search = SearchBar("Search-bar", "search-button");

searchElement.bar().addEventListener("keyup", () => {
  Search.Searching(searchElement.bar().value, table.lines());
});

searchElement.bar().addEventListener("keyup", () => {
  console.log(Search.expression);
});
