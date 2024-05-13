//area de variáveis
import { Get_APIS_For_Materials } from "./modules/objects.js";
import { Form, ValidationsOfForm } from "./modules/objects.js";
import { GetData } from "./modules/objects.js";
import { SearchBar } from "./modules/searchBar-module.js";
import { URL_IBGE_UF_API } from "./modules/keys.js";







//MOSTRANDO OS DADOS DA API DE MATERIAIS NO FORMS:
//Pegamos os dados da API Colaborators
//Get_APIS_For_Materials.GetApiColab("responsavel");

//Método ShowMaterial() mostra os materiais de uma API externa.

Get_APIS_For_Materials.ShowMaterial("material");

//IBGE API :

Get_APIS_For_Materials.getUfApi(URL_IBGE_UF_API, "uf");
document.getElementById("uf").addEventListener('change', () => {
  Get_APIS_For_Materials.getCityApi("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
  $("#uf").val() +
  "/municipios",  'cidade'); 
}) 

//validações :

//validação de nome
Form.nomeInput().addEventListener("keyup", () => {
  ValidationsOfForm.validationName();
});
//validação de Telefone
Form.TellInput().addEventListener("keyup", () => {
  ValidationsOfForm.validationPhone();
});
//validaçãp de Email

Form.EmailInput().addEventListener("keyup", () => {
  ValidationsOfForm.validationEmail(); 
  console.log(document.getElementById("date").value); 
});

ValidationsOfForm.dateMax();  
ValidationsOfForm.dateMin();


//PEGANDO DOS DADOS DO FORMULÁRIO E ENVIANDO PARA O LOCAL STORAGE:

let Ano_Cadastro = new Date();

let Mes_cadastro = new Date();

let Day_Cadastro = new Date();

let DayM = new Date();

Form.Button().addEventListener("click", () => {
  ValidationsOfForm.sigIn(
    Ano_Cadastro.getFullYear(),
    Mes_cadastro.getMonth(),
    Day_Cadastro.getDay(),
    DayM.getDate()
  ); 
  
});

//mostrando os dados das leads :
//GetData.Show();

//Search Bar

const table = {
  lines: () => document.getElementsByClassName("leads-person"),
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
