using System;
using dotnetpractice.Polymorphism; // Import the namespace
// using AbstractionExample.Abstraction; // ✅ Add this to reference Bike
using AbstractionExample; // ✅ Ensure this is added

class Program
{
    static void Main()
    //polymorphism ex
    // {
    //     // Creating an object of Car
    //     Car myCar = new Car();

    //     // Assigning values to properties
    //     myCar.Brand = "Tesla";
    //     myCar.Model = "Model S";
    //     myCar.Year = 2023;
    //     myCar.NumberOfDoors = 4;
    //     // Calling methods
    //     myCar.Start();  // Output: Car is starting.
    //     myCar.Stop();   // Output: Car is stopping.
    //     // Displaying properties
    //     Console.WriteLine($"Brand: {myCar.Brand}, Model: {myCar.Model}, Year: {myCar.Year}, Doors: {myCar.NumberOfDoors}");
    // }
    { 
 AbstractionExample.Car  myCar = new AbstractionExample.Car("Toyota", "Camry");
        myCar.Start();
         myCar.Stop();

        // AbstractionExample.Bike myBike = new AbstractionExample.Bike();
        // myBike.Start();
            }
}
