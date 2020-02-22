require('sinatra')
require('sinatra/reloader')
require('./lib/bank_account')
require('pry')
also_reload('lib/**/*.rb')

get('/') do
  "This is our homepage. '/' is always the root."
end

get('/bank_accounts') do
  @bank_accounts = Bank_Account.all
  erb(:bank_accounts)
end

get('/bank_accounts/new') do
  erb(:new_bank_account)
end

get('/bank_accounts/:id') do
  "This route will return one bank account"
end

post('/bank_accounts') do
  account_name = params[:bank_account_name]
  bank_name = params[:bank_account_bank_name]
  account_type = params[:bank_account_account_type]
  routing_number = params[:bank_account_routing_number]
  account_number = params[:bank_account_account_number]
  balance = params[:bank_account_balance]
  apy = params[:bank_account_apy]

  bank_account = Bank_Account.new(account_name, bank_name, account_type, routing_number, account_number, balance, nil, apy, nil)
  bank_account.save()
  erb(:bank_accounts)
end

patch('/bank_accounts/:id') do

end

delete('/bank_accounts/:id') do 

end


get('/bank_accounts/edit/:id') do
  "This route will take us to the form for editing a bank account."
end
 
get('/test') do
  erb(:whatever)
end