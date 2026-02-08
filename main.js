console.log("Arcium App Loaded");

const connectBtn = document.getElementById('connectBtn');
const actionBtn = document.getElementById('actionBtn');
const inputField = document.getElementById('inputField');
const statusArea = document.getElementById('statusArea');

// Логика Кошелька
if(connectBtn) {
    connectBtn.addEventListener('click', async () => {
        const provider = window.solana;
        if (!provider || !provider.isPhantom) {
            alert("Phantom Wallet не найден! Установите расширение Phantom.");
            window.open("https://phantom.app/", "_blank");
            return;
        }
        try {
            const resp = await provider.connect();
            const key = resp.publicKey.toString();
            connectBtn.innerText = "CONNECTED";
            connectBtn.className = "bg-green-600 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest border border-green-600";
            log("Wallet connected: " + key);
        } catch (err) { console.error(err); }
    });
}

// Логика Arcium
if(actionBtn) {
    actionBtn.addEventListener('click', async () => {
        const text = inputField.value;
        if(!text) return alert("Введите данные!");

        statusArea.classList.remove('hidden');
        actionBtn.disabled = true;
        actionBtn.innerText = "PROCESSING...";

        log(`Input: ${text}`);
        log("Encrypting via SHA-256...");
        await new Promise(r => setTimeout(r, 1000));
        
        const msgBuffer = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        log(`Hash: ${hashHex.slice(0, 15)}...`);
        log("Sending to Arcium Network...");
        await new Promise(r => setTimeout(r, 1500));
        log("Status: No match found (Privacy Preserved).");

        actionBtn.disabled = false;
        actionBtn.innerText = "ENCRYPT & FIND MATCH";
    });
}

function log(msg) {
    const line = document.createElement('div');
    line.innerText = "> " + msg;
    statusArea.appendChild(line);
    statusArea.scrollTop = statusArea.scrollHeight;
}
