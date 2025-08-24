// import { API_URL } from '$env/static/private';
// NOTE : NEED to be dynamic because we will set it in docker only when it runs
import { env } from '$env/dynamic/private';

export abstract class EnvVarWrapper {
	static get apiUrl(): string {
		return env.API_URL;
	}
}
