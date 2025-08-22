// hooks/useDownload.js
import { useState } from 'react';

import toast from "react-hot-toast";
import {downloadExpensesExcel} from "../utils/uploadExcel.js";

export const useDownload = (api_url, type) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState(null);

    const handleDownloadSheet = async () => {
        setIsDownloading(true);
        setDownloadError(null);

        try {
            const result = await downloadExpensesExcel(api_url, type);

            // Optionnel : afficher un message de succès
            console.log('Fichier téléchargé avec succès:', result.filename);

            // Vous pouvez ajouter une notification de succès ici
            toast.success(`Fichier ${result.filename} téléchargé avec succès`);

            return result;

        } catch (error) {
            setDownloadError(error.message);
            console.error('Erreur de téléchargement:', error.message);

            // Optionnel : afficher un message d'erreur
            // toast.error(error.message);

            throw error;
        } finally {
            setIsDownloading(false);
        }
    };

    return {
        handleDownloadSheet,
        isDownloading,
        downloadError
    };
};