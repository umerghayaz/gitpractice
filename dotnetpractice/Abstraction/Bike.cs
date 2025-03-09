namespace AbstractionExample
{
    public class Bike : Vehicle
    {
        // ✅ Constructor that calls the base class constructor
        public Bike(string brand, string model) : base(brand, model) { }

        public override void Start()
        {
            Console.WriteLine($"{Brand} {Model} is starting with a kick start.");
        }
    }
}
