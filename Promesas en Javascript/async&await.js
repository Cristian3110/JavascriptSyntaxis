//Nueva función de Async con Await

async function funcionConAwait(){
    let miPromesaU = new Promise(resolve =>{
        resolve('Promesa con Await');
    });
    
    console.log(await miPromesaU);
    
}

funcionConAwait();
