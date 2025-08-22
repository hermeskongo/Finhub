import React from 'react';
import {useDownload} from "../../hooks/useDownload.js";

export const DownloadButton = ({ api_url, type, className = '' }) => {
    const { handleDownloadSheet, isDownloading, downloadError } = useDownload(api_url, type);

    const onDownloadClick = async () => {
        try {
            await handleDownloadSheet();
        } catch (error) {
            // L'erreur est déjà gérée dans le hook
            // Vous pouvez ajouter une gestion d'erreur supplémentaire ici si nécessaire
        }
    };

    return (
        <div className={`flex flex-col ${className}`}>
            <button
                onClick={onDownloadClick}
                disabled={isDownloading}
                className={`
          px-4 py-2 rounded-lg font-medium transition-colors
          ${isDownloading
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }
        `}
            >
                {isDownloading ? (
                    <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="32"
                  strokeDashoffset="32"
              />
            </svg>
            Téléchargement...
          </span>
                ) : (
                    <span className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger Excel
          </span>
                )}
            </button>

            {downloadError && (
                <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded">
                    {downloadError}
                </div>
            )}
        </div>
    );
};