namespace CodeWars.ReturnTheMissingElement
{
    class Kata
    {
        public int GetMissingElement(int[] superImportantArray)
        {
            int missing = -1;

            string compare_elements = string.Join("", superImportantArray);

            for (var i = 0; i < 10; i++)
            {
                if (compare_elements.IndexOf(i.ToString()[0]) == -1)
                {
                    missing = i;
                }
            }

            return missing;
        }
    }
}
