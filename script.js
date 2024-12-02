const ctx = document.getElementById("barChart");

new Chart(
    ctx, {
        type: "bar",
        data: {
            labels: ["Red", "Blue", "Yellow", "Black"],
            datasets: [
                {
                    label: "Votes",
                    data: [12, 19, 3, 10],
                    borderWidth: 2,
                    backgroundColor: [
                        "rgba(245, 0, 0, 0.45)",
                        "rgba(5, 0, 249, 0.45)",
                        "rgba(250, 250, 5, 0.45)",
                        "rgba(32, 32, 29, 0.81)"
                    ],
                    borderColor: [
                        "rgba(245 ,0 ,0)",
                        "rgba(5, 0, 249)",
                        "rgba(250, 250, 5)",
                        "rgba(32, 32, 29)"
                    ]
                }
            ]
        }
    }
)