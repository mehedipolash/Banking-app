document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';
document.getElementById('addmoney').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function () {
  handleToggle('addmoney', 'block');
  handleToggle('cashout', 'none');
  handleToggle('transaction-history', 'none');
});
document.getElementById('cashout-box').addEventListener('click', function () {
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'block');
  handleToggle('transaction-history', 'none');
});
document.getElementById('transaction-box').addEventListener('click', function () {
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('transaction-history', 'block');
});
