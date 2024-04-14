import { loadUsers } from "./script";

async function displayUserData() {
    try {
        const users = await loadUsers();
        console.log(users);
    } catch (error) {
        console.error('Error loading users:', error);
    } 
}

displayUserData();