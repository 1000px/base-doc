import { t } from '_src/locale';

export default {
	methods: {
		t (...args) {
			return t.apply(this, args);
		}
	}
};
