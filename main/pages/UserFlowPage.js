import {API_TEST_CONFIG} from "../utils/constants";

export class UserFlowPage {
    constructor(request) {
        this.request = request;
        this.baseUrl = API_TEST_CONFIG.BASE_URL;
        this.authHeaders = {
            'x-api-key': API_TEST_CONFIG.API_KEY,
            'Content-Type': 'application/json'
        };
    }

    async createUser(name, job) {
        const createResponse = await this.request.post(this.baseUrl, {
            data: { name, job },
            headers: this.authHeaders
        });
        return createResponse;
    }

    async updateUser(userId, name, job) {
        const updateResponse = await this.request.put(`${this.baseUrl}/${userId}`, {
            data: { name, job },
            headers: this.authHeaders
        });
        return updateResponse;
    }
}