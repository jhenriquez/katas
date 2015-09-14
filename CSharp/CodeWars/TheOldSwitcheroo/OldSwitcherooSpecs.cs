using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CodeWars.TheOldSwitcheroo
{
    [TestClass]
    public class OldSwitcherooSpecs
    {
        TheOldSwitcheroo.OldSwitcheroo _kata = new TheOldSwitcheroo.OldSwitcheroo();

        [TestMethod]
        public void It_Should_Replace_Vowls_With_Index_Within_A_String()
        {
            var expected = "th3s 6s my str15ng";
            var actual = _kata.Vowel2Index("this is my string");
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void It_Should_Not_Be_Affected_By_The_Modified_String()
        {
            var expected = "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld";
            var actual = _kata.Vowel2Index("Codewars is the best site in the world");
            Assert.AreEqual(expected, actual);           
        }
    }
}
