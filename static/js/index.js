import api from './APIClient.js';

console.log("Javascript loaded!");

document.addEventListener('DOMContentLoaded', () => {
    let promptBox = document.querySelector('#prompt-box');
    let generateButton = document.querySelector('#generate-button');
    
    generateButton.addEventListener('click', () => {
        console.log('Generate button pressed!');
        
        let prompt = promptBox.value;
        console.log('Prompt:', prompt);

        // Clear prompt box
        promptBox.value = '';

        // Disable generate button until image has been returned
        generateButton.disabled = true;
        
        if (prompt != '') {
            api.generateImages(prompt).then(response => {
                console.log(response);
        
                let imageArea = document.querySelector('#image-area');
        
                response.images.forEach(imageData => {
                    
                    // TODO: Convert image data to an image
        
                    let image = new Image();
                    image.src = 'data:image/png;base64,' + imageData;
                    imageArea.appendChild(image);

                    // Enable generation again
                    generateButton.disabled = false;
                });
            });
        }
    });    
});