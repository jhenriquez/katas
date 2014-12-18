require 'minitest/autorun'

class Person
  def initialize(firstName, lastName, age)
    @firstName = firstName
    @lastName = lastName
    @age = age
  end
  
  def full_name
    "#{@firstName} #{@lastName}"
  end

  def age
    @age
  end
end

class TestPerson < Minitest::Test
	def setup
		@person = Person.new 'Pablo', 'Batida', 42
	end
	def test_age_is_accessible
		assert_equal 42, @person.age
	end
end