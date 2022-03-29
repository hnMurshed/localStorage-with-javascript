// const student = {
//     name: 'Arman uddin',
//     age: 22,
//     job: 'freelancing',
//     goal: 'Successful Entrepreneur'
// }

// localStorage.setItem('student-data', JSON.stringify(student));

const clearInput = id => {
    document.getElementById(id).value = '';
}

const getData = () => {
    const name = document.getElementById('name-field').value;
    const incomeText = document.getElementById('income-field').value;
    const income = parseFloat(incomeText);

    setBalanceData(name.toLowerCase(), income);

    clearInput('name-field');
    clearInput('income-field');
}

let balanceTracker = {};
const setBalanceData = (name, income) => {
    if (name in balanceTracker) {
        balanceTracker[name] = balanceTracker[name] + income;
    }
    else {
        balanceTracker[name] = income;
    }

    displayBalanceData(balanceTracker);
    storeDataLocalStorage(balanceTracker);
    
    console.log(balanceTracker);
}

const displayBalanceData = balanceData => {
    const table = document.getElementById('table');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>Name</th>
        <th>Balance</th>
    `;

    table.textContent = '';

    table.appendChild(tr);

    for (const prop in balanceData) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${prop}</td>
            <td>${balanceData[prop]}</td>
        `;
        table.appendChild(tr);
    }
}

const storeDataLocalStorage = data => {
    localStorage.setItem('balance-tracker', JSON.stringify(data));
}

const displayBalanceFromStorage = () => {

    const balanceTrackerString = localStorage.getItem('balance-tracker');
    const balanceTrackerParse = JSON.parse(balanceTrackerString);

    for (const prop in balanceTrackerParse) {
        balanceTracker[prop] = balanceTrackerParse[prop];
    }

    displayBalanceData(balanceTrackerParse)
}
displayBalanceFromStorage();

