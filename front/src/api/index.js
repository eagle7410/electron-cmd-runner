const STORE_LABEL = 'runs';

const store = localStorage;

class Api {

	/**
	 *
	 * @param {array} data
	 */
	static save(data) {

		if (!Array.isArray(data)) throw new Error('Api save not array');

		store.setItem(STORE_LABEL, JSON.stringify(data));
	}

	/**
	 *
	 * @return {Promise<Array>}
	 */
	static async getAll() {
		try {
			const runs = store.getItem(STORE_LABEL);

			return runs ? JSON.parse(runs) : [];

		} catch (e) {
			throw e;
		}
	}

	/**
	 *
	 * @param {object} data
	 * @return {Promise<boolean>}
	 */
	static async add(data) {
		try {
			let runs = await this.getAll();
			runs.push({ id: Date.now(), ...data});

			this.save(runs);

			return true;

		} catch (e) {
			throw e;
		}
	}

	static async update(data) {
		const runs = await this.getAll();
		this.save(runs.map(run => data.id === run.id ? data : run));
	}

	static async deleteById(id) {
		const runs = await this.getAll();
		this.save(runs.filter(run => run.id !== id));
	}
}

export default Api;
