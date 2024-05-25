import dotenv from 'dotenv';

dotenv.config();

const CLOUDINARY_URL = process.env.CLOUDINARY_URL || '';
const PORT = process.env.PORT || 3000;
const DB_CONFIG = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || '',
    DATABASE: process.env.DB_DATABASE || 'test',
    PORT: process.env.DB_PORT || 3306,
};
const configCloudinary = {
    cloud_name: process.env.CLOUDINARY_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || '',
};

export { CLOUDINARY_URL, PORT, DB_CONFIG, configCloudinary };
