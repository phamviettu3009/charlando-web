import { BASE_URL } from "constants/common";
import axiosInstance from "./axios";

export interface ResourceService {
    getImage: (resourceID: string) => Promise<string>;
}

const ResourceServiceImpl: ResourceService = {
    getImage: async (resourceID: string): Promise<string> => {
        const response: Blob = await axiosInstance.get(`${BASE_URL}resources/${resourceID}?sizeOption=mobile-image`, {
            responseType: "blob",
        });
        const url: string = URL.createObjectURL(response);
        return url;
    },
};

export default ResourceServiceImpl;
