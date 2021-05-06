let password = 'kfcvr54_3tv';

if (password.length >= 4 && password.includes('-') || password.includes('_')) {
  console.log('Пароль надёжный');  
} else {
  console.log('Пароль недостаточно надёжный');
}