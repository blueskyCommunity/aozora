import * as Gun from 'gun';
// TODO: Fix and use @react-platform/async-storage :)
import AsyncStorage from '@react-native-async-storage/async-storage/lib/module';

const readNode = (key, cb) => {

	try {
		AsyncStorage.getItem(key || '', cb);
  } catch (err) {
		// Uhh, this is probably super bad, but we are supressing an error that throws:
		// https://github.com/schnittstabil/merge-options/blob/master/index.js#L164
    // FIXME: Investigate what is causing this
	}
};

const read = (request, db) => {
	const { get } = request;

	const dedupid = request['#'];
	const key = get['#'];
	const field = get['.'];

	const done = (err, data) => {
		if (!data && !err) {
			db.on('in', {
				'@': dedupid,
				put: null,
				err: null,
			});
		} else {
			db.on('in', {
				'@': dedupid,
				put: Gun.graph.node(data),
				err,
			});
		}
	};

	const acknowledgeRet = (err, result) => {
		if (err) {
			done(err);
		} else if (result === null) {
			// Nothing found
			done(null);
		} else {
			const temp = JSON.parse(result);
			if (field) {
				done(null, temp[field] || null);
			} else {
				done(null, temp);
			}
		}
	};

	readNode(key || '', acknowledgeRet);
};

const write = (request, db) => {
	const { put: graph } = request;
	const keys = Object.keys(graph);
	const dedupid = graph['#'];

	const instructions = keys.map((key) => {
		return [key, JSON.stringify(graph[key] || {})];
	});

	try {
		AsyncStorage.multiMerge(instructions, (err) => {
			db.on('in', {
				'#': dedupid,
				ok: !err || err.length === 0,
				err,
			});
		});
	} catch (err) {
		// Uhh, this is probably super bad, but we are supressing an error that throws:
		// https://github.com/schnittstabil/merge-options/blob/master/index.js#L164
		// FIXME: Investigate what is causing this
	}
};

// This returns a promise, it can be awaited!
const reset = () => {
	try {
		AsyncStorage.clear();
	} catch (err) {
		// Uhh, this is probably super bad, but we are supressing an error that throws:
		// https://github.com/schnittstabil/merge-options/blob/master/index.js#L164
    // FIXME: Investigate what is causing this
	}
}

export default {
	read,
	write,
	reset,
};