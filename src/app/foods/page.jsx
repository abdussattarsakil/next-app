import FoodCard from "@/components/FoodCard";

const page = async() => {
    const res =await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const foods =data.data
    console.log(foods);
    return (
        <div>
            <div>
                {foods.map(food=><FoodCard food={food} key={food.id}></FoodCard>)}
            </div>
        </div>
    );
};

export default page;