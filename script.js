let apiKey = "s5G2pihNdE0wiUkORlzDzNkvZcg65yhgRAuqaAN8";
let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=s5G2pihNdE0wiUkORlzDzNkvZcg65yhgRAuqaAN8`; 

let getInfo = () => {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

window.addEventListener("load", getInfo);