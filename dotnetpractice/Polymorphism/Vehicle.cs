using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetpractice.Polymorphism
{
    public class Vehicle
    {
          public string Brand { get; set; } = string.Empty;  // Default value to avoid null
         public string Model { get; set; } = string.Empty;
        public int Year { get; set; }

        public virtual void Start()
        {
            Console.WriteLine("Vehicle is starting.");
        }

        public virtual void Stop()
        {
            Console.WriteLine("Vehicle is stopping.");
        }
    }
}