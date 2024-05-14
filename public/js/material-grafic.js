let database = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]"); 

let countNenhum = 0;
let countPlastico = 0;
let countMetal = 0;
let countPapel = 0;
let countVidro = 0;
let countPrensas = 0;
let countInfoProduto = 0;
let countFrete = 0;

for (let i in database) {
  switch (database[i]["material"]) {
    case "Nenhum":
      countNenhum++;
      break;
    case "Plastico":
      countPlastico++;
      break;
    case "Metal":
      countMetal++;
      break;
    case "Papel":
      countPapel++;
      break;
    case "Vidro":
      countVidro++;
      break;
    case "Prensa":
      countPrensas++;
      break;
    case "Info-Produto":
      countInfoProduto++;
      break;
    case "Frete":
      countFrete++;
      break;
  }
}

 
//donout

const ctx3 = document.getElementById("donout");

new Chart(ctx3, {
  type: "bar",
  data: {
    labels: [
      "Nenhum",
      "Plástico",
      "Metal",
      "Papel",
      "Vidro",
      "Prensas",
      "Info-Produto",
      "Frete"
    ],
    datasets: [
      {
        label: "Materiais Cadastrados",
        data: [
            countNenhum,
            countPlastico,  
            countMetal, 
            countPapel, 
            countVidro, 
            countPrensas, 
            countInfoProduto,
            countPrensas
        ],
        borderWidth: 1, 
        backgroundColor: [
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C'
        ],  
        borderColor : '#5EE95C', 
      },
    ],
  },
  options: { 
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
