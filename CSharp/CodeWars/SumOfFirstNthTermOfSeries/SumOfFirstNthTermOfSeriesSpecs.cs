using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeWars.SumOfFirstNthTermOfSeries
{
    [TestClass]
    public class NthSeriesSpecs
    {
        SumOfFirstNthTermOfSeries.NthSeries _kata = new SumOfFirstNthTermOfSeries.NthSeries();

        [TestMethod]
        public void Should_Return_Zero_For_SumOfZero()
        {
            var expected = "0.00";
            var actual = _kata.SeriesSum(0);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Should_Return_1dot25_For_SumOfTwo()
        {
            var expected = "1.25";
            var actual = _kata.SeriesSum(2);
            Assert.AreEqual(expected, actual);
        }
    }
}
