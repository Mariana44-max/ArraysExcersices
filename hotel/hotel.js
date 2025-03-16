// Arrangement for the 5 rooms (0 = free, 1 = occupied)
let rooms = [0, 0, 0, 0, 0];

// Arrow function to know if a room is free or not 
const showStatus = () => {
    let status = "Status of rooms:\n\n";
    for (let i = 0; i < rooms.length; i++) {
        status += `Room ${i + 1}: ${rooms[i] === 0 ? "Free" : "Occupied"}\n`;
    };
    alert(status);
};

// Function to reserve a room
const reserveRoom = num => {
    if (num === null || isNaN(num) || num < 1 || num > 5) {
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
    if (num === null || isNaN(num) || num < 1 || num > 5) {
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

// Principal menu
function menu() {
    while (true) {
        let option = parseInt(prompt(`Principal menu\n\n1. Show rooms status\n2. Reserv a room\n3. Free up a room\n4. Exit\n\nSelect an option:`));

        switch (option) {
            case 1:
                showStatus();
                break;
            case 2:
                let room = parseInt(prompt("Select a room to reserve:"));
                reserveRoom(room);
                break;
            case 3:
                let room2 = parseInt(prompt("Select a room to free up:"));
                freeRoom(room2);
                break;
            case 4:
                alert("Thank you for using our services!");
                return;
            default:
                alert("Invalid option, try again.");
        };
    };
};

document.getElementById('menuBTN').addEventListener("click", menu);