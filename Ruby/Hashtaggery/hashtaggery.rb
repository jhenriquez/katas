require 'minitest/autorun'

class String
  def hashtags
    split(' ').select { |w| w[0] == '#' }
  end
end

describe String do
	describe "Hashtaggery" do
		it "'this #word is #hashtagged' => ['#word', '#hashtagged']" do
			'this #word is #hashtagged'.hashtags.must_equal ['#word', '#hashtagged']
		end
	end
end