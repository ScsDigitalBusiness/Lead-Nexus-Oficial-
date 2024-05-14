const localStorageKey = "user-dados";

const Localimg = "user-img";
let  teste = ''; 
let nome, empresa, departamento, profileIMG, inputFile, reader;

profileIMG = document.getElementById("profileImg");

inputFile = document.getElementById("upload-img");

inputFile.onchange = () => {
  profileIMG.src = URL.createObjectURL(inputFile.files[0]);
  reader = new FileReader();
  reader.readAsDataURL(inputFile.files[0]);
  reader.addEventListener("load", () => {
    const url = reader.result;
    window.localStorage.setItem(Localimg, url);
  });
};
 
$(".btn").click(function () {
  let db = JSON.parse(localStorage.getItem(localStorageKey) || "[]");

  nome = $("#nome").val();
  empresa = $("#empresa").val();
  departamento = $("#dep").val();

  db = [
    {
      nome: nome,
      dep: departamento,
      empresa: empresa,
    },
  ]; 

  localStorage.setItem(localStorageKey, JSON.stringify(db));

});

function MOSTRADADOS() {
  let profileImg = localStorage.getItem(Localimg);

  document.getElementById("profileImg").src = profileImg;

  let db = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  for (let i = 0; i < db.length; i++) {
    $("#nome").val(db[i]["nome"]);
    $("#dep").val(db[i]["dep"]);
    $("#empresa").val(db[i]["empresa"]);
  }
}

function showUserDados() {
  let db_LocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );
  let profileImage = localStorage.getItem(Localimg);
  document.getElementById("user-foto").src = profileImage;

  for (let i in db_LocalStorage) {
    $(".name_user").html(db_LocalStorage[i]["nome"]);
  }
}

showUserDados();
MOSTRADADOS();
