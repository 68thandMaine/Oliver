class Bank_Account
  attr_accessor(:account_name, :bank_name, :apy)
  attr_reader(:account_type, :routing_number, :account_number, :balance, :available_cash, :id)
  @@bank_accounts = {}
  @@total_rows = 0

  def initialize(account_name, bank_name, account_type, routing_number, account_number, balance, available_cash, apy, id)
    @account_name = account_name
    @bank_name = bank_name
    @account_type = account_type
    @routing_number = routing_number
    @account_number = account_number
    @balance = balance
    @available_cash = available_cash
    @apy = apy
    @id = id || @@total_rows += 1
  end

  def ==(other_bank_account)
    self.account_name.eql?(other_bank_account.account_name) && self.bank_name.eql?(other_bank_account.bank_name) && self.account_type.eql?(other_bank_account.account_type) && self.routing_number.eql?(other_bank_account.routing_number) && self.account_number.eql?(other_bank_account.account_number) && self.account_number.eql?(other_bank_account.account_number) && self.balance.eql?(other_bank_account.balance) && self.available_cash.eql?(other_bank_account.available_cash) && self.apy.eql?(other_bank_account.apy)
  end
  
  def self.all()
    @@bank_accounts.values
  end

  def save
    @@bank_accounts[self.id] = Bank_Account.new(self.account_name, self.bank_name, self.account_type, self.routing_number, self.account_number, self.balance, self.available_cash, self.apy, self.id)
  end

  def self.clear
    @@bank_accounts = {}
    @@total_rows = 0
  end

  def self.find(id)
    @@bank_accounts[id]
  end

  def update(account_name, bank_name, apy)
    @account_name = account_name
    @bank_name = bank_name
    @apy = apy
  end

  def delete
    @@bank_accounts.delete(self.id)
  end
end