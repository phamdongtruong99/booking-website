import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { userApi } from '../../api/user';

import { apiErrorHandler } from '../../utils';
import {
	getAllUserType,
	addUserType,
	updateUserType,
	delUserType,
	getUserByIdType
} from '../actionTypes';

function* getAllAction() {
	try {
		const { data } = yield userApi.getAll();

		if (data) {
			yield put({ type: getAllUserType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getAllUserType.failed });
	}
}


function* addUserAction(action) {
	try {
		const { data: { data } } = yield userApi.addUser(action.payload);

		if (Object.keys(data).length) {
			yield put({ type: addUserType.success, payload: data });
			action.history.push('/')
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: addUserType.failed });
	}
}


function* updateUserAction(action) {
	try {
		const { data } = yield userApi.updateUser(action.payload);

		if (data) {
			yield put({ type: updateUserType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: updateUserType.failed });
	}
}


function* delUserAction(action) {
	try {
		const { data } = yield userApi.delUser(action.payload);

		// eslint-disable-next-line no-console
		console.log(action, '<---action-');
		if (data) {
			yield put({ type: delUserType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: delUserType.failed });
	}
}
function* getUserByIdAction(action) {
	try {
		const { data } = yield userApi.getById(action.payload);
		if (data) {
			yield put({ type: getUserByIdType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getUserByIdType.failed });
	}
}

export default function* sagas() {
	yield takeLeading(getAllUserType.request, getAllAction);
	yield takeLeading(addUserType.request, addUserAction);
	yield takeLeading(updateUserType.request, updateUserAction);
	yield takeLeading(delUserType.request, delUserAction);
	yield takeLeading(getUserByIdType.request, getUserByIdAction);

}
