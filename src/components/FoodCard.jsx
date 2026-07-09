
const FoodCard = ({food}) => {
    const {dish_name}=food;
    return (
        <div>
            <h1 className="text-3xl font-mono text-mauve-500">{dish_name}</h1>
        </div>
    );
};

export default FoodCard;