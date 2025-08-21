export const BASE_URL = 'http://localhost:3000'

const auth_base = '/api/v1/auth'
const incomes_base = 'api/v1/incomes'
const expenses_base = 'api/v1/expenses'

export const API_PATHS = {
    AUTH: {
        LOGIN: `${auth_base}/login`,
        REGISTER: `${auth_base}/register`,
        GET_USER: `${auth_base}/getUser`,
        UPLOAD_IMG: `${auth_base}/upload-img`
    },
    DASHBOARD: {
        GET_DATA: '/api/v1/dashboard/getDashboardData'
    },
    INCOMES: {
        ADD: `${incomes_base}/add`,
        ALL: `${incomes_base}/all`,
        DELETE: (id) => `${incomes_base}/delete/${id}`,
        DOWNLOAD: `${incomes_base}/download`
    },
    EXPENSES: {
        ADD: `${expenses_base}/add`,
        ALL: `${expenses_base}/all`,
        DELETE: (id) => `${expenses_base}/delete/${id}`,
        DOWNLOAD: `${expenses_base}/download`
    }

}