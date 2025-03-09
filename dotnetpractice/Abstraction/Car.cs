namespace AbstractionExample
{
    public class Car : Vehicle
    {
        // ✅ Constructor that calls the base class constructor
        public Car(string brand, string model) : base(brand, model) { }

        public override void Start()
        {
            Console.WriteLine($"{Brand} {Model} is starting with an ignition key.");
        }
    }
}
