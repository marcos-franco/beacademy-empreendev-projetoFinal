const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


// toggle do menu responsivo
menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('menu-open');
});


// vue js
var app = Vue.createApp({
    data() {
        return {
            pizzas: []
        }
    },
    mounted() {
        // obtém dados das pizzas
        const pizzas = fetch('./data/pizzas.json');
        pizzas.then((response) => {
            response.json().then((pizzas) => {
                // atribui os dados de pizzas obtidos a variável this.pizzas
                this.pizzas = pizzas;
            });
        }).catch(() => {
            // caso ocorra um erro ao obter dados das pizzas, mostra uma mensagem ao usuário
            alert('O cardápio de pizza não pode ser carregado. Por favor, tente novamente mais tarde.');
        });
    },
});
app.mount("#vue-root");