let db;

export function openOrCreateDatabase() {
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
      console.log(
        "Database upgrade/creation needed. Version:",
        event.oldVersion,
        "to",
        event.newVersion
      );

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
        if (!objectStore.indexNames.contains("contraseña")) {
          objectStore.createIndex("contraseña", "contraseña", {
            unique: false,
          });
        }
        console.log("Object store 'users' and indexes created successfully.");
      } else {
        console.log(
          "Object store 'users' already exists. No new store created."
        );
      }
    };
  });
}

export function addUser(userData) {
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

export function getUserByEmail(email) {
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

    transaction.oncomplete = () => {};

    transaction.onerror = (event) => {
      console.error("Transaction error:", event.target.error);
    };
  });
}
