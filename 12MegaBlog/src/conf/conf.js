const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
}

export default conf


