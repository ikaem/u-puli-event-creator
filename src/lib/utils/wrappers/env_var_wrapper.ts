import { API_URL } from '$env/static/private';

export abstract class EnvVarWrapper {
	static get apiUrl(): string {
		return API_URL;
	}
}
