import CategoryItem from "../components/CategoryItem";

const categories = [
	{ href: "/abonnement", name: "Abonnement", imageUrl: "/abonnemon.jpeg" },
	{ href: "/bafle", name: "Bafle", imageUrl: "/bafle.jpeg" },
	{ href: "/boxandroide", name: "Boxandroide", imageUrl: "/boxandroid.jpeg" },
	{ href: "/kitblotooth", name: "kitblotooth", imageUrl: "/kitblotooth.jpeg" },
	{ href: "/phone", name: "Phone", imageUrl: "/phone.jpg" },
	{ href: "/recepteur", name: "Recepteur", imageUrl: "/recepteur.jpeg" },
	{ href: "/tablette", name: "Tablette", imageUrl: "/tablett.jpeg" },
];

const HomePage = () => {
  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
        <p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in electronic products
				</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {categories.map((category) => (
            <CategoryItem
              category={category}
              key={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

