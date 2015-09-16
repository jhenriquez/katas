using System;
using System.Linq;

namespace CodeWars.WeightForWeight
{
    public class WeightSort
    {
        public string OrderWeight(string strng)
        {
            return strng.Split(' ')
                .Select(w => new { Weight = w, Value = GetWeightValue(w) })
                .OrderBy(w => w.Value)
                .ThenBy(w => w.Weight)
                .Select(w => w.Weight)             
                .Aggregate((r, v) => r + ' ' + v)
                .Trim();
        }

        private int GetWeightValue(string weight)
        {  
            return weight.ToCharArray().Select(Char.GetNumericValue).Select(Convert.ToInt32).Sum();
        }
    }
}