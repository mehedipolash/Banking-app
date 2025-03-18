document
  .getElementById('cashout-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('cashout-account-number').value;
    const amount = getInputValueById('cashout-amount');
    const pinNumber = getInputValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');

    if (amount > mainBalance) {
      alert('amount should be less than mainBalane!');
      return;
    }

    if (amount < 0) {
      alert('amount must be positive number!');
      return;
    }

    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIdandValue('main-balance', sum);

        const container = document.getElementById('transaction-container');

        const div = document.createElement('div');
        div.classList.add('bg-red-400');

        div.innerHTML = `
         
          <h1 class="text-yellow-300">Cashout</h1>
          <h3>${amount}</h3>
          <p>account number: ${accountNumber}</p>
      
        `;
        container.appendChild(div);
      } else {
        alert('Invalid pin!');
      }
    } else {
      alert('Invalid account number');
    }
  });
