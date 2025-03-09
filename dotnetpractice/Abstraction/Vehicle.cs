namespace AbstractionExample
{
    public abstract class Vehicle
    {
        public string Brand { get; set; }
        public string Model { get; set; }

        // ✅ Constructor to initialize Brand and Model
        public Vehicle(string brand, string model)
        {
            Brand = brand;
            Model = model;
        }
               
                       // it cannot be over ridden
    public void Stop()  // Concrete method (has implementation)
    {
        Console.WriteLine("Vehicle is stopping.");
    }
    // Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from).
        // it cant be inherited 
        public abstract void Start();

    }
}
