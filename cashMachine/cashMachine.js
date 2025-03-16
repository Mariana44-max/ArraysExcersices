// Here we establish the balance and movements of the account
let balance = 2000
var movements = [ ];

// Function to check the balance
const checkBal = () => { // Here we only show the balance.
    alert(`Your balance is: ${balance}`);
    alert('Going back to the menu...');
};

// Function to show the last 5 movements
const lastMov = () => {
    let movementsString;
    if(movements.length > 0){
        for (let i = 0; i < movements.length; i++) {
            movementsString += `${i+1}. ${movements[i]}\n`;
            // We use the for loop to show the movements in a list.
        } 
        alert(`Your last movements are:\n${movementsString}\n\nYour balance is: ${balance}`);}
    else {
        alert('You have no movements yet.'); 
        // If the user has no movements yet, we show this message.
    }
    alert('Going back to the menu...');
};

// Function to withdraw money from the account.
const withdraw = () => {
    let amount = parseInt(prompt('How much would you like to withdraw?'));
    if(!isNaN(amount) && amount > 0) { // We check if the amount is a number and if it is greater than 0.
        if (amount > balance || amount > 500) {
            alert(`ERROR, you don't have enough funds or you are trying to withdraw more than $500.`);
            // We show this message if the user tries to withdraw more than $500 or if the amount is greater than the balance.
            alert('Going back to the menu...');
        } else {
            balance -= amount; // We subtract the amount from the balance.
            if( movements.length >= 5) { // We check if the movements array has more than 5 elements.
                movements[movements.length] = (`- $${amount}`);
                movements.shift(0); 
                // We use the shift method to remove the first element of the array and add the new movement at the end.
                alert(`You have withdrawn $${amount}\nYour balance is now $${balance}`);
            } else {
                movements.push(`- $${amount}`);
                alert(`You have withdrawn $${amount}\nYour balance is now $${balance}`);
            }
        }
    } else {
        // If the amount is not a number or is less than 0, we show this message.
        alert('ERROR, please enter a valid amount!');
    }
};


// Function to deposit money into the account.
const deposit = () => {
    let amount = parseInt(prompt('How much would you like to deposit?'));
    if (!isNaN(amount) && amount > 0) { // We check if the amount is a number and if it is greater than 0 again.
        balance += amount;
        if( movements.length >= 5) { // We check if the movements array has more than 5 elements.
            movements[movements.length] = (`+ ${amount}`);
            movements.shift(0);
            // We use the shift method to remove the first element of the array and add the new movement at the end.
            alert(`You have deposited ${amount}\nYour balance is now ${balance}`);
        } else {
            movements.push(`+ ${amount}`);
            alert(`You have deposited ${amount}\nYour balance is now ${balance}`);
        }
    } else {
        // If the amount is not a number or is less than 0, we show this message.
        alert('ERROR, please enter a valid amount!');
    }
    alert('Going back to the menu...');
};

// Function to exit the menu.
const exit = () => { 
    // We show this message when the user decides to exit the menu.
    alert('Closing the menu...');
};


// Function to show the menu
const menu = () => { // Here we show the menu options and we use a switch statement to call the functions.
    while (true) {   
        let option = prompt('Select an option: \n1. Check balance \n2. Last movements \n3. Withdraw \n4. Deposit \n5. Exit');
        switch (option) {
            case '1':
                checkBal();
                break;
            case '2':
                lastMov();
                break;
            case '3':
                withdraw();
                break;
            case '4':
                deposit();
                break;
            case '5':
                exit();
                break;
            default:
                alert('Invalid option');
                break;
        }
    }
}

document.getElementById('MenuBTN').addEventListener('click', menu);