using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeWars.TheOldSwitcherooTwo
{
    [TestClass]
    public class OldSwitcherooTwoSpecs
    {
        TheOldSwitcherooTwo.OldSwitcherooTwo _kata = new TheOldSwitcherooTwo.OldSwitcherooTwo();

        [TestMethod]
        public void It_Should_Replace_Vowls_With_Index_Within_A_String()
        {
            var expected = "315452311819";
            var actual = _kata.Encode("codewars");
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void It_Should_Not_Be_Affected_By_The_Modified_String()
        {
            var expected = "208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225";
            var actual = _kata.Encode("this is a long string!! Please [encode] @C0RrEctly");
            Assert.AreEqual(expected, actual);
        }
    }
}
