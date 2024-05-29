const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollection: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucket: String(import.meta.env.VITE_BUCKET_ID),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
}

export default conf


