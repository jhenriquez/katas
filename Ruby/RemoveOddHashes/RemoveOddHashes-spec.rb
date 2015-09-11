require_relative './RemoveOddHashes'

RSpec.describe RemoveOddHashes, '#call' do
  it "should eliminate all the entries that don't add up to an even number" do
    expect(RemoveOddHashes.call([{ a: 5, b: 5 }, { a: 3, b: 4 } ])).to eq [{ a: 5, b: 5}]
  end
end
