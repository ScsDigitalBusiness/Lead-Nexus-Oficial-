

 
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
