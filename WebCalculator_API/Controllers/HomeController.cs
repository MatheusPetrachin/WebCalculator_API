using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace WebCalculator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        [HttpPost("Sum")]
        public double Sum(Calc calc)
        {
            return calc.values.Sum();
        }

        [HttpPost("Subtraction")]
        public double Subtraction(Calc calc)
        {
            double result = 0.0;
            var firstValue = calc.values.FirstOrDefault();
            result = firstValue;
            foreach (var item in calc.values)
            {
                result -= item;
            };
            return result + firstValue;
        }

        [HttpPost("Multiplication")]
        public double Multiplication(Calc calc)
        {
            double result = 0.0;
            result = calc.values.FirstOrDefault();
            calc.values.Remove(result);
            foreach (var item in calc.values)
            {
                result *= item;
            };
            return result;
        }

        [HttpPost("Division")]
        public double Division(Calc calc)
        {
            double result = 0.0;
            result = calc.values.FirstOrDefault();
            calc.values.Remove(result);
            foreach (var item in calc.values)
            {
                result /= item;
            };
            return result;
        }
    }

    public class Calc
    {
        public List<double> values { get; set; }
    }
}
