const datos = [{
    id: 1,
    nombre: "pelicula1",
    edad: 1994
},{
    id:2,
    nombre:"pelicula2",
    edad:1997
},{
    id:3,
    nombre:"pelicula3",
    edad:1999
}]

const prueba = []
const datosid = []

const misdatos = new Promise((resolve, reject) => {
    datos.forEach((element,index,array) => {
        prueba[index]=(element.nombre)
        datosid[index] = (element.id)
    });resolve(datosid)
})

   

misdatos.then((caca) =>{
    console.log(caca)
 })

