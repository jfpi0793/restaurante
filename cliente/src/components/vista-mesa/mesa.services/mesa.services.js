import axios from "axios";

const baseUrl = "http://localhost:3002/api"; 

const fetchAllMesaData = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const fetchMesaDataById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/mesa/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};



const mesaFunctions = {
    getAllMesa: fetchAllMesaData,
    getMesa: fetchMesaDataById,
    createMesa: async (id_mesa, producto, cantidad, precio) => {
        const response = await axios.post(baseUrl, {
            id_mesa,
            producto,
            cantidad,
            precio,
        });
        return response.data;
    },    
};

export default mesaFunctions;