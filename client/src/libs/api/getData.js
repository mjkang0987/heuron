import axios from 'axios';

export const getData = async ({uri}) => {
    try {
        const {data} = await axios(uri);
        return data;
    } catch (error) {
        console.log(error);
    }
};
