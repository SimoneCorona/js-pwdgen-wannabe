// PASSWORD GENERATOR

// Chiedi all’utente il suo nome
const user_name = prompt ('Qual\'è il tuo nome?')
console.log(user_name);
// Chiedi all’utente il suo cognome
const user_surname = prompt ('Qual\'è il tuo cognome?')
console.log(user_surname);
// Chiedi all’utente il suo colore preferito
const user_pref_color = prompt ('Qual\'è il tuo colore preferito?')
console.log(user_pref_color);

// ELABORAZIONE
const user_password = user_name + user_surname + user_pref_color + 21

// OUTPUT
document.getElementById('user-password').innerHTML = user_password;