// Async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list to display users
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);