new Vue({
    el: '#app',
    data: {
      currentPage: 'Home', 
      isHomePage: true, 
    },
    methods: {
      changePage(i) {
        this.isHomePage = false; 
        this.currentPage = 'Atividade' + i;
      },
      goHome() {
        this.isHomePage = true; 
        this.currentPage = 'Home'; 
      }
    },
    components: {
      Home: {
        template: `
          <div>
            <h2>Bem-vindo ao site das Atividades!</h2>
            <p>Aqui você pode acessar as atividades clicando nos botões do menu acima.</p>
          </div>
        `
      },
      Atividade1: {
        template: '<iframe src="Paginas/Atividade1.html" class="w-100" height="500px"></iframe>'
      },
      Atividade2: {
        template: '<iframe src="Paginas/Atividade2.html" class="w-100" height="500px"></iframe>'
      },
      Atividade3: {
        template: '<iframe src="Paginas/Atividade3.html" class="w-100" height="500px"></iframe>'
      },
      Atividade4: {
        template: '<iframe src="Paginas/Atividade4.html" class="w-100" height="500px"></iframe>'
      },
      Atividade5: {
        template: '<iframe src="Paginas/Atividade5.html" class="w-100" height="500px"></iframe>'
      },
      Atividade6: {
        template: '<iframe src="Paginas/Atividade6.html" class="w-100" height="500px"></iframe>'
      },
      Atividade7: {
        template: '<iframe src="Paginas/Atividade7.html" class="w-100" height="500px"></iframe>'
      },
      Atividade8: {
        template: '<iframe src="Paginas/Atividade8.html" class="w-100" height="500px"></iframe>'
      }
    }
  });
  