require 'minitest/autorun'

module Kata
	def sort_reindeer reindeer_names
	  sorted_deers = reindeer_names.inject({}) { |r,v| r[v] = v.split(' ')[1]; r }.sort_by { |k,v| v }
	  sorted_deers.inject([]) { |r,v| r + [v[0]] }
	end
end

include Kata

describe 'sort_reindeer' do
	it 'sorts reindeers by lastname' do
		sort_reindeer(["Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall", "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"]).must_equal ["Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall", "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"]
	end
end