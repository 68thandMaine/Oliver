require('sinatra')

get('/') do
  "This is our homepage. '/' is always the root."
end

get('/bank_accounts') do
  "This route will return a list of bank accounts."
end

get('/bank_accounts/:id') do
  "This route will return one bank account"
end

post('/bank_accounts') do
  "This route creates a new bank account"
end

patch('/bank_accounts/:id') do

end

delete('/bank_accounts/:id') do 

end

get('/bank_accounts/new') do
  "This route will take us to the form for creating a new bank account."

end

get('/bank_accounts/edit/:id') do
  "This route will take us to the form for editing a bank account."
end
 