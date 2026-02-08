const mockDatabase = ["0x5f4dcc3b5aa765d61d8327deb882cf99", "0x7c4a8d09ca3762af61e59520943dc264"];

document.getElementById('searchBtn').addEventListener('click', async () => {
    const input = document.getElementById('contactInput').value;
    const btn = document.getElementById('searchBtn');
    const results = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');

    if (!input) return alert("Please enter a contact to encrypt");

    btn.disabled = true;
    results.classList.remove('hidden');
    
    // Имитация локального хеширования (то, что делает Arcium SDK)
    resultsList.innerHTML = `<span class="text-purple-400 text-[9px] animate-pulse">GENERATING SECURE HASH...</span>`;
    await new Promise(r => setTimeout(r, 1000));
    
    const fakeHash = "0x" + Math.random().toString(16).slice(2, 34);
    resultsList.innerHTML = `<span class="text-zinc-500 text-[9px]">LOCAL HASH: ${fakeHash}</span>`;
    
    await new Promise(r => setTimeout(r, 1000));
    btn.innerText = "SENDING TO ARCIUM CLUSTER...";
    
    // Имитация вычислений в сети
    await new Promise(r => setTimeout(r, 2000));

    btn.disabled = false;
    btn.innerText = "INITIATE PRIVATE DISCOVERY";
    
    // Результат
    const isFound = input.includes("test") || input === "123"; // Для теста
    resultsList.innerHTML = isFound 
        ? `<div class="py-2"><span class="text-green-400 font-bold uppercase text-[10px]">✓ Match found via PSI Protocol</span><br><span class="text-zinc-600 text-[8px]">Data remained encrypted during search</span></div>`
        : `<div class="py-2"><span class="text-zinc-500 font-bold uppercase text-[10px]">No matches found in confidential set</span></div>`;
});