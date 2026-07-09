import Image from "next/image";

const page = async ({ params }) => {
    const { foodId } = await params;
    console.log(foodId);

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { dish_name,image_link } = data.data;

    return (
        <div className="container mx-auto">
            <div className="card bg-base-100 image-full w-fit h-fit shadow-sm mx-auto">
                <figure>
                    <Image
                    src={image_link}
                    alt={dish_name}
                    width={300}
                    height={100}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;