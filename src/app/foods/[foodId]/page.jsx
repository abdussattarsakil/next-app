import Image from "next/image";

const page = async ({ params }) => {
    const { foodId } = await params;
    console.log(foodId);

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { dish_name, image_link, main_ingredients } = data.data;

    return (
        <div className="container mx-auto">
            <div className="card bg-base-200 image-full w-fit h-fit shadow-sm mx-auto">
                <figure>
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={350}
                        height={200}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{dish_name}</h2>

                    <ul className="list-disc mt-6">
                        <h1>Ingredients:</h1>
                        {main_ingredients.map((ingredient, index) =>
                            <li key={index}>
                                {ingredient}
                            </li>)}
                    </ul>


                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;