
import OBR from "@owlbear-rodeo/sdk";

export function setupCounter(inputElement) {
  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const responses = ['Mutzaz Gdaziad', 'Edez muy difedente', 'Dodomit ha muedto'];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const responseElement = document.querySelector('#response');
      responseElement.textContent = `Respuesta: ${randomResponse}`;
      console.log(`Input value: ${inputElement.value}`);
    }
  });
}