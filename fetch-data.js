// Function to fetch and display user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a list to display user names
    const userList = document.createElement("ul");

    // Loop through the users and create list items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle any errors that occur during fetching
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
