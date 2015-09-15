namespace CodeWars.TheOldSwitcherooTwo
{
    public class OldSwitcherooTwo
    {
        public string Encode(string str)
        {
            var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            for(var i = str.Length - 1; i >= 0; i--)
            {
                var indexOf = alphabet.IndexOf(str[i]);

                if (indexOf == -1)
                {
                    continue;
                }

                if (indexOf > 25)
                {
                    indexOf -= 26;
                }

                str = str.Remove(i, 1).Insert(i, (indexOf + 1).ToString());
            }

            return str;
        }
    }
}