const usersList = document.getElementById('users');
const dogImages = document.getElementById('dog-images');

function getUsers() {
    const getUsersRequest = fetch('https://jsonplaceholder.typicode.com/users');

    const getUsersJson = getUsersRequest.then((response) => {
        return response.json();
    });

    getUsersJson.then((data) => {
        for (let user of data) {
            const listItem = document.createElement('li');
            const userName = document.createTextNode(user.name);
            listItem.appendChild(userName);

            usersList.appendChild(listItem);
        }
    });
}

getUsers();

function getRandomDogImage() {
    let getRandomDogImageRequest = fetch(
        'https://dog.ceo/api/breeds/image/random',
        {
            method: 'GET',
        }
    );

    let getRandomDogImageJson = getRandomDogImageRequest.then((response) => {
        return response.json();
    });

    getRandomDogImageJson.then((data) => {
        let dogImageElement = document.createElement('img');
        dogImageElement.setAttribute('src', data.message);

        dogImages.appendChild(dogImageElement);
    });
}

for (let index = 0; index < 10; index++) {
    getRandomDogImage();
}

function postContent(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'IT School - JS Asynchronous ' + userId,
            body: 'Programare asincrona',
            userId: userId,
        }),
    })
        .then((response) => {
            // throw new Error('Adaugare postare');
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        })
        .then((data) => {
            console.log(data);
        });
}

// for (let index = 0; index < 10; index++) {
//     postContent(index);
// }

function getDetailedUsers() {
    fetch('https://random-data-api.com/api/v2/users?size=15')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

getDetailedUsers();
