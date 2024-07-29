import axios from 'axios';

const API_URI = 'https://tauqueer-file-sharing-mern.onrender.com';
const BITLY_TOKEN = 'ef7168533baf912bab21449b815db30ae40f7f3b';

export const shortenUrl = async (longUrl) => {
    const config = {
        headers: {
            Authorization: `Bearer ${BITLY_TOKEN}`,
            'Content-Type': 'application/json',
        },
    };
    const data = {
        long_url: longUrl,
    };

    try {
        const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', data, config);
        return response.data.link;
    } catch (error) {
        console.error('Error shortening URL:', error);
        return longUrl; // Return original URL if there's an error
    }
};

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        const { fileUrl } = response.data;

        // Shorten the file URL
        const shortUrl = await shortenUrl(fileUrl);

        return { ...response.data, shortUrl };
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
};
