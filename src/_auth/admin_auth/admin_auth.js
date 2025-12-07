import { ID, Query } from "appwrite";
import { account, appWriteConfig, databases } from "../../lib/appwrite/config";

// create a new admin (SignUp)
async function signUpAdmin(adminData) {
    const { email, password, name } = adminData

    //create new admin account
    const newAdmin = await account.create(
        ID.unique(),
        email,
        password
    )

    // stroe data in data collection for admin user info
    await databases.createDocument(
        appWriteConfig.adminDatabaseID,
        appWriteConfig.adminDatabaseUserInfoCollectionID,
        ID.unique(),
        {
            user_id: newAdmin.$id,
            name: name,
            email: email
        }
    )

    // auto login
    await account.createEmailPasswordSession(email, password)
    return newAdmin
}

// login admin
async function logInAdmin(adminData) {
    const { email, password } = adminData
    await account.createEmailPasswordSession(email, password)
    return await account.get()
}

// get current logged in admin
async function getCurrent() {
    try {
        return await account.get()
    } catch (error) {
        return null
    }
}

// check its admin logged in or not
async function isAdminLoggedIn(userID) {
    const res = await databases.listDocuments(
        appWriteConfig.adminDatabaseID,
        appWriteConfig.adminDatabaseUserInfoCollectionID,
        [Query.equal("user_id", userID)]
    )

    return res.total > 0
}

export {
    logInAdmin,
    signUpAdmin,
    getCurrent,
    isAdminLoggedIn
}