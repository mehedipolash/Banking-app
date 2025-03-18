

document
  .getElementById('add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
   
    const selectedBank = document.getElementById('allbank').value;
    

    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueById('amount');
    const pinNumber = getInputValueById('pin');

    const mainBalance = getInnerTextById('main-balance');

    if (amount < 0) {
      alert('invalid amount!');
      return;
    }
     
    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance + amount;
        //document.getElementById('main-balance').innerText=sum;
        setInnerTextByIdandValue('main-balance', sum);

        const container = document.getElementById('transaction-container');
        
        const div = document.createElement('div');
        div.classList.add('bg-blue-400');



        div.innerHTML = `
         
          <h1 class="text-yellow-300">Added money from ${selectedBank}</h1>
          <h3>${amount}</h3>
          <p>account number: ${accountNumber}</p>
        
        
        `;
        container.appendChild(div);




      } else {
        alert('Invalid pin!');
      }
    } else {
      alert('Invalid account number!');
    }


  });
