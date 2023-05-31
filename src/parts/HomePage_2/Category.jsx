import React from "react";

const categories = [
  {
    name: "Weekend Open Trip",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Island Hopping",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Sport & Adventure",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Culture & Art",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Wellness",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Education",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Instagrammable",
    imageUrl: "destination-2.jpeg",
  },
];

function Category() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl mt-4 mb-4">Kategori Pilihan</h1>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="">
            <div className="flex items-center justify-center mr-5 ring-2 w-72 h-72 ring-slate-100 p-5 rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src={`/images/${category.imageUrl}`}
                  alt=""
                  className="h-32 w-32"
                />
                <span className="mt-2">{category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
