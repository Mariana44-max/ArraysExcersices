const queue = [];
let clientNumber = 1;

const updateDisplay = () => {
    document.getElementById("current-client").textContent = queue.length > 0 ? queue[0] : "None";
    document.getElementById("clients-queue").textContent = queue.length > 1 ? queue.slice(1).join(", ") : "None";
};

const addClient = () => {
    if (queue.length < 7) {
        queue.push(`Client${clientNumber++}`);
        updateDisplay();
    }
};

const nextClient = () => {
    if (queue.length > 0) {
        queue.shift();
        addClient();
        updateDisplay();
    }
};

for (let i = 0; i < 7; i++) addClient();

document.getElementById("next-client").addEventListener("click", nextClient);