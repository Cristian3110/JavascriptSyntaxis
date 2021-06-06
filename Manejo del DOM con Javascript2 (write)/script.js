
/**
 * Document.write(): Para utilizar este método se debe tener mucho cuidado ya que puede sobreescribir 
 * un document.write anterior o un método anterior y no es recomendable
 */

document.write('Saludos desde Javascript');

//un ejemplo donde se denote la sobreescritura

function mostrar(){
    document.write('Hola sobreescribiendo el método anterior');
}