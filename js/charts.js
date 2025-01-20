// Dados para o gráfico
const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: 'Valor da Carteira (R$)',
        data: [20000, 22000, 21500, 23000, 25000, 25432],
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        borderColor: '#00ff88',
        borderWidth: 2,
        tension: 0.4,
        fill: true
    }]
};

// Configurações do gráfico
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
};

// Função para inicializar o gráfico
function initializeChart() {
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    new Chart(ctx, config);
}

// Inicializar o gráfico quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', initializeChart); 