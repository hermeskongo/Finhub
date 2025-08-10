import {axiosInstance} from "./axiosInstance.js";
import {API_PATHS} from "./apiPaths.js";

export async function uploadImg(imgFile) {
    try {
        const formData = new FormData()
        formData.append('image', imgFile)
        const response = await axiosInstance.post(API_PATHS.AUTH.UPLOAD_IMG, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    } catch (e) {
        console.error("Error on uploading image:", e)
        throw e
    }
}