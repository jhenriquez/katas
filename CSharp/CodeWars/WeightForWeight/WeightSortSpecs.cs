using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeWars.WeightForWeight
{
    [TestClass]
    public class WeightSortSpecs
    {
        WeightForWeight.WeightSort _kata = new WeightForWeight.WeightSort();

        [TestMethod]
        public void OrderWeight_Should_Return_100_20_When_Passed_20_100()
        {
            var expected = "100 20";
            var actual = _kata.OrderWeight("20 100");
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void OrderWeight_Should_Order_Equaly_Valued_Weights_In_Descending_Order()
        {
            var expected = "11 11 2000 10003 22 123 1234000 44444444 9999";
            var actual = _kata.OrderWeight("44444444 2000 11 11 10003 22 123 1234000  9999");
            Assert.AreEqual(expected, actual);
        }
    }
}
