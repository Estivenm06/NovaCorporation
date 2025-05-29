let db;

function openOrCreateDatabase() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject("This browser does not support IndexedDB");
            return;
        }

        const request = window.indexedDB.open("myDatabaseOfUser", 1); 

        request.onerror = (event) => {
            console.error("Database error:", event.target.errorCode);
            reject("There is an error creating/opening the database.");
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            resolve(db); 
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            console.log("Database upgrade/creation needed. Version:", event.oldVersion, "to", event.newVersion);

            if (!db.objectStoreNames.contains("users")) {
                const objectStore = db.createObjectStore("users", {
                    keyPath: "id", 
                    autoIncrement: true,
                });

                if (!objectStore.indexNames.contains("nombre")) {
                    objectStore.createIndex("nombre", "nombre", { unique: false });
                }
                if (!objectStore.indexNames.contains("email")) {
                    objectStore.createIndex("email", "email", { unique: true });
                }
                if (!objectStore.indexNames.contains("token")) {
                    objectStore.createIndex("token", "token", { unique: true });
                }
                console.log("Object store 'users' and indexes created successfully.");
            } else {
                console.log("Object store 'users' already exists. No new store created.");
            }
        };
    });
}

function addUser(userData) {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Database not initialized. Call openOrCreateDatabase() first.");
            return;
        }

        const transaction = db.transaction(["users"], "readwrite");
        const objectStore = transaction.objectStore("users");

        const requestAdd = objectStore.add(userData);

        requestAdd.onsuccess = () => {
            console.log("User added successfully:", userData);
            resolve(requestAdd.result); 
        };

        requestAdd.onerror = (event) => {
            console.error("Error adding user:", event.target.error);
            reject(event.target.error);
        };

        transaction.oncomplete = () => {
            console.log("Add user transaction completed.");
        };

        transaction.onerror = (event) => {
            console.error("Transaction error:", event.target.error);
        };
    });
}

function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Database not initialized. Call openOrCreateDatabase() first.");
            return;
        }

        const transaction = db.transaction(["users"], "readonly"); 
        const objectStore = transaction.objectStore("users");
        const emailIndex = objectStore.index("email"); 

        const getRequest = emailIndex.get(email); 

        getRequest.onsuccess = (event) => {
            const user = event.target.result; 
            resolve(user);
        };

        getRequest.onerror = (event) => {
            console.error("Error getting user by email:", event.target.error);
            reject(event.target.error);
        };

        transaction.oncomplete = () => {
        };

        transaction.onerror = (event) => {
            console.error("Transaction error:", event.target.error);
        };
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        await openOrCreateDatabase();

        if (window.initialUserData) {

            const userToAdd = {
                nombre: window.initialUserData.nombre,
                email: window.initialUserData.email,
                token: window.initialUserData.token
            };

            const userAlreadyExists = await getUserByEmail(userToAdd.email);
            
            if(userAlreadyExists) {
                const h1 = document.querySelector('.slider h1').innerHTML = 'Este usuario ya <span class="text-indigo-500">Existe</span><br /> <a href="/login" class="text-white hover:text-gray-400">Inicia sesion</a>';
                console.log(h1);
                
                return
            };

            await addUser(userToAdd); 
        } else {
            console.log("No initial user data from server (window.initialUserData is null/undefined).");
        }

    } catch (error) {
        console.error("Error in main IndexedDB flow:", error);
    } finally {
        delete window.initialUserData;
    }
});