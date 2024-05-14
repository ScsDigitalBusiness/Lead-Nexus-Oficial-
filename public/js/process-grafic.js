let LocalDataBase = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]"); 

let count_Moído_e_Lavado = 0;

let countGranulado = 0;

let countEnfardado = 0;

let countSolto = 0;

let countPrensado = 0;

let countNenhumProcess = 0;

for (let i in LocalDataBase) {
  switch (LocalDataBase[i]["processo"]) {
    case "Moído e Lavado":
      count_Moído_e_Lavado++;
      break;
    case "Granulado":
      countGranulado++;
      break;
    case "Enfardado":
      countEnfardado++;
      break;
    case "Solto":
      countSolto++;
      break;
    case "Prensado":
      countPrensado++;
      break;
    case "Nenhum":
      countNenhumProcess++;
      break;
  }
}

//polar

const ctx4 = document.getElementById("polar");

new Chart(ctx4, {
  type: "polarArea",
  data: {
    labels: [
      "Moído e Lavado",
      "Granulado",
      "Enfardado",
      "Solto",
      "Prensado",
      "Nenhum",
    ],
    datasets: [
      {
        label: "Leads Cadastradas",
        data: [
          count_Moído_e_Lavado,
          countGranulado,
          countEnfardado,
          countSolto,
          countPrensado,
          countNenhum,
        ],
        backgroundColor: [
          "#68F263",
          "#96D9A5",
          "#9FD996",
          "#F2F2F2",
          "#6A8466",
          "#0D0D0D",
          "#3C2E25",
        ],
        borderColor: "black",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
