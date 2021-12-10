import axios from 'axios';

export const getItems = async ({uri}) => {
    try {
        const {data} = await axios(uri);
        return data;
    } catch (error) {
        console.log(error);
    }
};
