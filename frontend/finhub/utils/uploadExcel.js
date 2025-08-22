// utils/downloadService.js
import { axiosInstance } from "./axiosInstance.js";

export const downloadExpensesExcel = async (api_url, type) => {
    try {
        console.log('Démarrage du téléchargement...');

        // Requête avec responseType 'blob' pour les fichiers
        const response = await axiosInstance.get(api_url, {
            responseType: 'blob', // Important pour les fichiers
            headers: {
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        });

        // Créer un blob avec le contenu du fichier
        const blob = new Blob([response.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });

        // Créer une URL temporaire pour le blob
        const url = window.URL.createObjectURL(blob);

        // Créer un lien temporaire et cliquer dessus
        const link = document.createElement('a');
        link.href = url;

        // Extraire le nom du fichier depuis les headers ou créer un nom par défaut
        let filename = `finhub-${type}s.xlsx`;
        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition) {
            const filenameMatch = contentDisposition.match(/filename="(.+)"/);
            if (filenameMatch) {
                filename = filenameMatch[1];
            }
        } else {
            // Créer un nom avec timestamp
            filename = `finhub-${type}-${new Date().toISOString().slice(0,10)}.xlsx`;
        }

        link.download = filename;
        link.style.display = 'none';

        // Ajouter au DOM, cliquer et supprimer
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Nettoyer l'URL temporaire
        window.URL.revokeObjectURL(url);

        console.log('Téléchargement terminé:', filename);
        return { success: true, filename };

    } catch (error) {
        console.error('Erreur lors du téléchargement:', error);

        if (error.response?.status === 401) {
            throw new Error('Session expirée. Veuillez vous reconnecter.');
        } else if (error.response?.status === 404) {
            throw new Error('Aucune dépense trouvée à télécharger.');
        } else {
            throw new Error(`Erreur lors du téléchargement: ${error.message}`);
        }
    }
};