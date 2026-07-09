
const loading = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
                {[...Array(12)].map((_, index) => (
                    <div
                        key={index}
                        className="card bg-base-200 shadow-md p-5 animate-pulse"
                    >
                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="skeleton h-28 w-28 rounded-full"></div>
                        </div>

                        {/* Title */}
                        <div className="mt-5 space-y-3">
                            <div className="skeleton h-5 w-4/5"></div>
                            <div className="skeleton h-5 w-3/5"></div>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-end mt-3">
                            <div className="skeleton h-6 w-20 rounded-full"></div>
                        </div>

                        {/* Description */}
                        <div className="mt-4 space-y-2">
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-3/4"></div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between mt-6">
                            <div className="skeleton h-10 w-24 rounded-lg"></div>
                            <div className="skeleton h-10 w-24 rounded-lg"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default loading;