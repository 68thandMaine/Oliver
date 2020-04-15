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

   static getAllBankAccounts() {
     return new Promise (async (resolve, reject) => {
       try {
         const bankAccounts = await Api().get('/oliver/account');
         resolve(bankAccounts);
       } catch (err) {
         reject(err);
       }
     });
   }
 }