import { SDK } from "@arcium/sdk";

// Инициализация (базовый пример из docs.arcium.com)
async function initArcium() {
    console.log("Initializing Arcium...");
    try {
        // Здесь мы будем настраивать подключение к сети Arcium
        // На данном этапе это заглушка для интерфейса
        document.getElementById('searchBtn').addEventListener('click', () => {
            const input = document.getElementById('contactInput').value;
            alert('Starting Private Set Intersection for: ' + input);
        });
    } catch (error) {
        console.error("Arcium init failed:", error);
    }
}

initArcium();