namespace CodeWars.TheOldSwitcheroo
{
    public class OldSwitcheroo
    {
        public string Vowel2Index(string str)
        {
            var vowels = "aeiou";

            for (var i = str.Length - 1; i >= 0; i--)
            {
                if (vowels.Contains(str[i].ToString()))
                {
                    str = str.Remove(i, 1).Insert(i, (i + 1).ToString());
                }
            }

            return str;
        }
    }
}