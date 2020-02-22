require('bank_account')

describe '#Bank_Account' do
  before(:each) do
    Bank_Account.clear()
  end
  # class methods are preceded by a .
  describe('.all') do
    it("returns an empty array when no bank accounts exist") do 
      expect(Bank_Account.all).to(eq([]))
    end
  end
  
  # instance methods are preceded by a #
  describe('#save') do
    it("saves a bank account") do
      apple_fcu = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu.save()
      chase = Bank_Account.new('Chase', 'JP Morgan Chase', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      chase.save()
      expect(Bank_Account.all).to(eq([apple_fcu, chase]))
    end
  end

  describe('#==') do
    it("is the same bank account if it has the same attributes as another bank account") do
      apple_fcu = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu2 = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      expect(apple_fcu).to(eq(apple_fcu2))
    end
  end

  describe('.clear') do
    it("clears all bank accounts") do
      apple_fcu = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu.save()
      apple_fcu2 = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu2.save()
      Bank_Account.clear()
      expect(Bank_Account.all).to(eq([]))
    end
  end

  describe('.find') do
    it("finds a bank account by id") do
      apple_fcu = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu.save()
      chase = Bank_Account.new('Chase', 'JP Morgan Chase', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      chase.save()
      expect(Bank_Account.find(apple_fcu.id)).to(eq(apple_fcu))
    end
  end

  describe('#update') do
    it("updates a bank account") do
      chase = Bank_Account.new('Chase', 'JP Morgan Chase', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      chase.save()
      chase.update('Chase Bank', nil, nil)
      expect(chase.account_name).to(eq("Chase Bank"))
    end
  end

  describe('#delete') do
    it("deletes a bank account by id") do
      chase = Bank_Account.new('Chase', 'JP Morgan Chase', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      chase.save()
      apple_fcu = Bank_Account.new('Apple FCU', 'Apple Federal Credit Union', 'Checking', '123123123', '123123123', '123.32', '100.00', '1.1', nil)
      apple_fcu.save()
      chase.delete()
      expect(Bank_Account.all).to(eq([apple_fcu]))
    end
  end
end