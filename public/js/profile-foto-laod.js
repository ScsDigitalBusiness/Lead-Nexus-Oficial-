const LocalIMG = "user-img";
const localStorageKey = "user-dados"; 

  /* 
    [1] FUNCIONALIDADE : ESSA FUNÇÃO PEGA OS DADOS REGISTRADOS NA PÁGINA DE SETTINGS  E MOSTRA ESSES DADOS PARA O USUÁRIO NO HEADER DA APLICAÇÃO 
      
    [2]DESENVOLVEDOR : THIAGO  DUARTE 
    */

  let db_LocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
); 
  
  let profileImage = localStorage.getItem(LocalIMG);
  document.getElementById("user-foto").src = profileImage;
  for (let i in db_LocalStorage) {
    $(".name-user").html(db_LocalStorage[i]["nome"]);
  }

