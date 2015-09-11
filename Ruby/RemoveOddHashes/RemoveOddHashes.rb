class RemoveOddHashes
  
  def self.call(hashes)
    self.new.call hashes
  end
  

  def call hashes
    hashes.select { |i| (i[:a] + i[:b]).even? } 
  end

end
