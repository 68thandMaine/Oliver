class Bank_Account
  attr_accessor :account_name :bank_name :apy
  attr_reader :account_type :routing_number :account_number :balance :available_cash 
  @@bank_accounts = []

  def initialize(account_name, bank_name, account_type, routing_number, account_number, balance, available_cash, apy)
    @account_name = account_name
    @bank_name = bank_name
    @account_type = account_type
    @routing_number = routing_number
    @account_number = account_number
    @balance = balance
    @available_cash = available_cash
    @apy = apy
  end

  def ==(other_bank_account)
    self.account_name.eql?(other_bank_account.account_name) && self.bank_name.eql?(other_bank_account.bank_name) && self.account_type.eql?(other_bank_account.account_type) && self.routing_number.eql?(other_bank_account.routing_number) && self.account_number.eql?(other_bank_account.account_number) && self.account_number.eql?(other_bank_account.account_number) && self.balance.eql?(other_bank_account.balance) && self.available_cash.eql?(other_bank_account.available_cash) && self.apy.eql?(other_bank_account.apy)
  end
  
  def self.all()
    @@bank_accounts
  end

end