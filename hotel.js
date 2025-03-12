// Arrangement for the 5 rooms (0 = free, 1 = occupied)
let rooms = [0, 0, 0, 0, 0];

// Arrow function to know if a room is free or not 
const showStatus = () => {
let status = "Status of rooms:\n";
for (let i = 0; i < rooms.length; i++) {
    status += `Room ${i + 1}: ${rooms[i] === 0 ? "Free\n" : "Ocuppied\n"}`;
}
alert(status);
};

// Function to reserve a room
const reserveRoom = num => {
if (num < 1 || num > 5) {
    alert("Put a valid room number!");
} else if (rooms[num - 1] === 1) {
    alert("Sorry, room ocuped.");
    showStatus();
} else {
    rooms[num - 1] = 1;
    alert(`Room ${num} reserved sucessfull.`);
    showStatus();
}
};

// Function to free up a room
const freeRoom = num => {
if (num < 1 || num > 5) {
    alert("Put a valid room number!");
} else if (rooms[num - 1] === 0) {
    alert(`The room ${num} is free now.`);
    showStatus();
} else {
    rooms[num - 1] = 0;
    alert(`Room ${num} successfully released.`);
    showStatus();
}
};

document.getElementById('menuBTN').addEventListener("click", menu);

// Principal menu
function menu() {
while (true) {
    let option = prompt(`1. Show rooms status
2. Reserv a room
3. Free up a room
4. Exit

Select an option:`);
    if (option === "1") {
        showStatus();
    } else if (option === "2") {
        let num = parseInt(prompt("Put a room number (1-5):"));
        reserveRoom(num);
    } else if (option === "3") {
        let num = parseInt(prompt("Put a room number (1-5):"));
        freeRoom(num);
    } else if (option === "4") {
        alert("Leaving...");
        break;
    } else {
        alert("Select a valid option!");
    }
};
};

document.getElementById('menuBTN').addEventListener("click", menu);