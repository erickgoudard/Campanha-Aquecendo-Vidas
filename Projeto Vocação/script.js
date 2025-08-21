// Animação dos contadores
function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue).toLocaleString();
    }, 16);
}

// Iniciar animações quando a página carregar
window.addEventListener('load', () => {
    setTimeout(() => {
        animateCounter('roupas-counter', 15420);
        animateCounter('pessoas-counter', 8750);
        animateCounter('pontos-counter', 45);
    }, 500);
});

// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Funções do modal
function openDonationModal(type) {
    const modal = document.getElementById('donationModal');
    const content = document.getElementById('modalContent');
    
    let modalHTML = '';
    
    if (type === 'roupas') {
        modalHTML = `
            <div class="text-center">
                <div class="text-6xl mb-4">👔</div>
                <h3 class="text-2xl font-bold mb-4">Doação de Roupas</h3>
                <p class="text-gray-600 mb-6">Aceitamos roupas em bom estado:</p>
                <ul class="text-left text-gray-600 mb-6 space-y-2">
                    <li>• Casacos e jaquetas</li>
                    <li>• Blusas de frio</li>
                    <li>• Calças compridas</li>
                    <li>• Cobertores</li>
                    <li>• Meias e luvas</li>
                </ul>
                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <p class="text-sm text-blue-800">
                        <strong>Ponto de coleta mais próximo:</strong><br>
                        Shopping Center - Piso L1<br>
                        Seg a Sex: 9h às 18h
                    </p>
                </div>
                <button onclick="alert('Obrigado! Aguardamos sua doação no ponto de coleta.')" class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
                    Confirmar Doação
                </button>
            </div>
        `;
    } else if (type === 'dinheiro') {
        modalHTML = `
            <div class="text-center">
                <div class="text-6xl mb-4">💰</div>
                <h3 class="text-2xl font-bold mb-4">Contribuição Financeira</h3>
                <p class="text-gray-600 mb-6">Escolha o valor da sua contribuição:</p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <button onclick="selectAmount(25)" class="border-2 border-green-500 text-green-500 px-4 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                        R$ 25
                    </button>
                    <button onclick="selectAmount(50)" class="border-2 border-green-500 text-green-500 px-4 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                        R$ 50
                    </button>
                    <button onclick="selectAmount(100)" class="border-2 border-green-500 text-green-500 px-4 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                        R$ 100
                    </button>
                    <button onclick="selectAmount(200)" class="border-2 border-green-500 text-green-500 px-4 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                        R$ 200
                    </button>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <p class="text-sm text-yellow-800">
                        <strong>Demo:</strong> Esta é uma demonstração. Em um site real, aqui haveria integração com sistema de pagamento seguro.
                    </p>
                </div>
            </div>
        `;
    } else if (type === 'voluntario') {
        modalHTML = `
            <div class="text-center">
                <div class="text-6xl mb-4">🤝</div>
                <h3 class="text-2xl font-bold mb-4">Seja Voluntário</h3>
                <p class="text-gray-600 mb-6">Como você gostaria de ajudar?</p>
                <div class="space-y-3 mb-6">
                    <label class="flex items-center text-left">
                        <input type="checkbox" class="mr-3"> Coleta de doações
                    </label>
                    <label class="flex items-center text-left">
                        <input type="checkbox" class="mr-3"> Organização no depósito
                    </label>
                    <label class="flex items-center text-left">
                        <input type="checkbox" class="mr-3"> Distribuição para famílias
                    </label>
                    <label class="flex items-center text-left">
                        <input type="checkbox" class="mr-3"> Divulgação da campanha
                    </label>
                </div>
                <input type="text" placeholder="Seu nome" class="w-full p-3 border rounded-lg mb-3">
                <input type="email" placeholder="Seu email" class="w-full p-3 border rounded-lg mb-6">
                <button onclick="alert('Obrigado! Entraremos em contato em breve.')" class="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors">
                    Quero Ser Voluntário
                </button>
            </div>
        `;
    }
    
    content.innerHTML = modalHTML;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeDonationModal() {
    const modal = document.getElementById('donationModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function selectAmount(amount) {
    alert(`Obrigado pela sua contribuição de R$ ${amount}! Em um site real, você seria redirecionado para o pagamento seguro.`);
}

// Fechar modal clicando fora dele
document.getElementById('donationModal').addEvent
