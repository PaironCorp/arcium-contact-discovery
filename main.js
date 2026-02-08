// Временная имитация SDK для демонстрации работы Private Set Intersection (PSI)
class ArciumMockSDK {
    async findMatches(inputContact) {
        console.log("Arcium: Шифруем данные и отправляем в сеть...");
        // Имитируем задержку сети Arcium
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const mockDatabase = ["+123456789", "test@mail.com", "crypto_friend"];
        return mockDatabase.includes(inputContact);
    }
}

const sdk = new ArciumMockSDK();

document.getElementById('searchBtn').addEventListener('click', async () => {
    const input = document.getElementById('contactInput').value;
    const btn = document.getElementById('searchBtn');
    const results = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');

    if (!input) return alert("Введите контакт!");

    // UX: Показываем процесс загрузки
    btn.disabled = true;
    btn.innerText = "ENCRYPTING & SEARCHING...";
    results.classList.add('hidden');

    const isFound = await sdk.findMatches(input);

    // Показываем результат
    btn.disabled = false;
    btn.innerText = "FIND MATCHES";
    results.classList.remove('hidden');
    
    resultsList.innerHTML = isFound 
        ? `<div class="text-green-400 p-2">✓ Match found! This user is on Arcium.</div>`
        : `<div class="text-zinc-500 p-2">No matches found safely.</div>`;
});