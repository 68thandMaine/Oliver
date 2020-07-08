import * as BankAccountActions from '../BankAccountActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import constants from '../../constants';
import fetchMock from 'fetch-mock';
import BankAccounts from '../../mock-data/mock-bankAccount';
import fetch from 'node-fetch';
const { action } = constants;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Bank account actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	describe('when getting account information', () => {
		it('creates FETCH_BANKACCOUNTS_SUCCESS when fetching bank accounts is complete', () => {
			
			fetchMock.getOnce('./', {
				body: { bankAccounts: BankAccounts },
				headers: { "content-type": "application/json" }
			});
			
			const expectedActions = [
				{ type: action.FETCH_BANKACCOUNTS },
				{ type: action.FETCH_BANKACCOUNTS_SUCCESS, body: { bankAccounts: BankAccounts } }
			]
			
			const store =  mockStore({ bankAccounts: [] });
			return store.dispatch(BankAccountActions.fetchBankAccounts()).then((res) => {
				console.log(res)
				expect(store.getActions()).toEqual(expectedActions)
			})
		})
	})
});

