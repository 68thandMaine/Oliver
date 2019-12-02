 import Api from './api';

 export default class BankAccountService {
   static createBankAccount(bankAccount) {
     return new Promise (async (resolve, reject) => {
       try {
         const newAccount = await Api().post('/oliver/account', bankAccount);
         resolve(newAccount);
       } catch (err) {
         reject (err);
       }
     });
   }
 }