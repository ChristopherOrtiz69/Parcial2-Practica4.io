const miInformacion = {
    nombre: "Christopher Ortiz ",
    edad: 23,
    datosDeContacto: {
      email: "chris-ivan06@hotmail.com",
      telefono: "5526983654",
      direccion: "123 Calle Principal, Ciudad",
    },
    pasatiempos: ["Leer", "Jugar al videojuegos", "Ir al cine "],
    librosFavoritos: [
      {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Novela",
        publicacion: 1925,
        fichaBibliografica: function () {
          console.log(`"${this.titulo}" de ${this.autor}, publicado en ${this.publicacion}`);
        },
      },
      {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        publicacion: 1967,
        fichaBibliografica: function () {
          console.log(`"${this.titulo}" de ${this.autor}, publicado en ${this.publicacion}`);
        },
      },
      {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        publicacion: 1937,
        fichaBibliografica: function () {
          console.log(`"${this.titulo}" de ${this.autor}, publicado en ${this.publicacion}`);
        },
      },
    ],
    esEstudiante: true,
    saludar: function () {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años, este es mi correo ${this.datosDeContacto.email} `);
    },
  };
  
  // Llamar al método saludar
  miInformacion.saludar();
  
  // Imprimir fichas bibliográficas de libros favoritos
  miInformacion.librosFavoritos.forEach((libro) => {
    libro.fichaBibliografica();
  });