import Image from "next/image";


const FoodCard = ({ food }) => {
    const { dish_name, image_link, price, rating, category } = food;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm h-full p-5 ">
                <figure>
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={150}
                        height={100}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {dish_name}
                        <div className="badge badge-secondary">Rating:{rating}</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">Add to cart</button>
                        <button className="btn btn-info">Show details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;