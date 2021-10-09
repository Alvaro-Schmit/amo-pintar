// import Floki400x500 from '../assets/image/picture/Floki400x500.jpg'
// import Deportista400x500 from '../assets/image/picture/Deportista400x500.jpg'
// import Puente from '../assets/image/picture/Puente500x345.jpg'
// import Ragnar from '../assets/image/picture/Ragnar300x375.jpg'
// import Elefantes from '../assets/image/picture/elefantes300x230.jpg'
// import Chita from '../assets/image/picture/chita300x220.jpg'
// import Jimy from '../assets/image/picture/Jimy 300x228.jpg'
// import ByNFloky from '../assets/image/picture/ByNFloki352x400.jpg'
// import Bjorg from '../assets/image/picture/Bjorg.png'




const dataItems =[
    {

        id: 'aaaa',
        name: 'Floki',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/41/b2/5e/41b25e936f0df63c300768fe123975a0.jpg',
        className:"flokiColor",
        detailClassName:"detailflokiColor",
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente. Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price: 2200,
         size: '240 x 50'
        
    },
    {
        id: 'aaab',
        name: 'Deportista',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/d5/ee/0b/d5ee0b641b42d7e6c67ef09a9927197a.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"deportista",
        detailClassName:"detaildeportista",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price:800,
        size: '40 x 50'
        
    },
    {
        id: 'aaac',
        name: 'PuenteCalmo',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/26/b2/0d/26b20ddd428c29b94fa0966d9ed02707.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"puente",
        detailClassName:"detailpuente",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Naturaleza',
        price:400,
        size: '40 x 50'
        
    },
    {
        id: 'aaad',
        name: 'Ragnar',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/57/74/a6/5774a6d29d6c9f0c6de7c2b9f8a3d9b1.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"ragnar",
        detailClassName:"detailragnar",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price: 1200,
         size: '40 x 50'
        
        
    },
    {
        id: 'aaae',
        name: 'Elefantes',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/cc/93/f3/cc93f35c8afc0d831289b9a9be49b2a7.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"elefantes",
        detailClassName:"detailelefantes",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Naturaleza',
        price:800,
        size: '40 x 50'
        
    },
    {
        id: 'aaaf',
        name: 'Chita',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/10/86/39/108639dc98292024b3f118476ae274af.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"chita",
        detailClassName:"detailchita",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Naturaleza',
        price:500,
        size: '40 x 50'
        
    },
   
   
    {
        id: 'aaag',
        name: 'Jimmy',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/b8/dc/b0/b8dcb0811cfdf9a12e0c15dd929a903e.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"jimmy",
        detailClassName:"detailjimmy",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price:900,
        size: '40 x 50'
        
    },
    { 
        id: 'aaah',
        name: 'Bjorg',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/4f/5a/93/4f5a93e2d1864a57b3cfc91b4cac8180.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"bjorg",
        detailClassName:"detailbjorg",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price: 1300,
         size: '140 x 50'
    
    },
    {
        id: 'aaai',
        name: 'FlokyByN',
        smallDescription: 'Breve refencia o Subtitulo',
        image: 'https://i.pinimg.com/originals/e7/b5/30/e7b53077ba4f491e081548417b82acad.jpg',
        description: 'descripcion del producton que tenga 3 renglones aproximadamente',
        detailDescription: 'descripcion un poco mas larga sobre la pintura seis o siete reglones idealmente , pero lo que salga esta bien renglones aproximadamente Algo que te salga del corazon , que te inspirre cuando vez esa obra',
        className:"byNFloky",
        detailClassName:"detailbyNFloky",
        artista: 'Fiama Rossi',
        fotoArtista: 'https://i.pinimg.com/originals/84/90/03/84900374e43f27fe907d2738d28fa2c5.jpg',
        datosAutor: 'La autora de esta Obra Fiama Rossi, nacio en 1997 en un Publito llamado Soca al centro este de Uruguay. Desde pequeña demostro su facinacion por la exprecion plastica y si bien hoy dia se desempeña como profesora de educación fisica, no deja de desarrollar su talento con la pintura y continua descubriendo su pasion por ella',
        category: 'Retratos',
        price: 1100,
         size: '140 x 50'
        
    }
];



export default dataItems