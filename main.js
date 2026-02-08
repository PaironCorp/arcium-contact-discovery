const mockDatabase = ["+123456789", "test@mail.com", "pairon"];

document.getElementById('searchBtn').addEventListener('click', async () => {
    const input = document.getElementById('contactInput').value;
    const btn = document.getElementById('searchBtn');
    const results = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');

    if (!input) return alert("Please enter data first");

    // Эффект загрузки
    btn.disabled = true;
    btn.innerText = "ENCRYPTING DATA...";
    results.classList.add('hidden');

    // Имитация работы сети Arcium (2 секунды)
    await new Promise(r => setTimeout(r, 2000));
    
    btn.innerText = "RUNNING PSI PROTOCOL...";
    await new Promise(r => setTimeout(r, 1500));

    // Проверка
    const isFound = mockDatabase.includes(input.toLowerCase());

    btn.disabled = false;
    btn.innerText = "INITIATE PRIVATE DISCOVERY";
    results.classList.remove('hidden');
    results.classList.remove('animate-pulse');
    
    resultsList.innerHTML = isFound 
        ? `<span class="text-green-400 font-bold tracking-widest uppercase text-[10px]">✓ Match found in Arcium Cluster</span>`
        : `<span class="text-zinc-500 font-bold tracking-widest uppercase text-[10px]">No private matches detected</span>`;
});