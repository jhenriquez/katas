using System;

namespace CodeWars.SumOfFirstNthTermOfSeries
{
    public class NthSeries
    {

        public string SeriesSum(int num)
        {
            double result = 0.00;
            double div = 1.00;

            for(var i = 0; i < num;i++)
            {
                result += 1 / div;
                div += 3;
            }

            return result.ToString("0.00");
        }
    }
}