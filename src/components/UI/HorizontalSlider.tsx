






const Hori = () => {
  const items = [
    { id: 1, text: '20% Promo Cashback', image: 'image1.jpg' },
    { id: 2, text: 'Special Dish', image: 'image2.jpg' },
    { id: 3, text: 'New Arrivals', image: 'image3.jpg' },
    // Add more items as needed
  ];

  return (
    <div
      className="flex overflow-x-auto p-2 mt-8 bg-cover sm:p-6 lg:p-8"
      style={{
        backgroundImage: `url('https://www.example.com/background-image.jpg')`, // Update to your actual image
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative min-w-[200px] h-[200px] md:min-w-[250px] md:h-[200px] lg:min-w-[800px] lg:h-[400px] mr-2 rounded-lg overflow-hidden flex-shrink-0"
          
        >
          <img 
            src={item.image} 
            alt={item.text} 
            className="w-full h-full object-cover aspect-[4/3]" // Maintain aspect ratio of 4:3
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold text-center">
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hori;


