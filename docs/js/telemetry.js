new Chart(document.getElementById("grafico-velocidad"), {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Prueba",
        data: [280, 300, 310, 295, 305],
        borderColor: "red",
      },
    ],
  },
});