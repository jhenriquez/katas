using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeWars.ReturnTheMissingElement
{
    [TestClass]
    public class ReturnTheMissingElementSpecs
    {
        ReturnTheMissingElement.Kata _kata = new ReturnTheMissingElement.Kata();

        [TestMethod]
        public void It_Should_return_8_when_provided_with_051329764()
        {
            var expected = 8;
            var actual   = _kata.GetMissingElement( new int[] { 0, 5, 1, 3, 2, 9, 7, 6, 4 });
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void It_Should_return_3_when_provided_with_924570861()
        {
            var expected = 3;
            var actual = _kata.GetMissingElement( new int[] { 9, 2, 4, 5, 7, 0, 8, 6, 1 });
            Assert.AreEqual(expected, actual);
        }
    }
}
