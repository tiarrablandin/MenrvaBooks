import { Card, CardBody } from "@/providers";

const BookSkeleton = () => {
    return (
        <Card
            shadow={false}
            className="relative h-40 lg:h-48 min-w-32 lg:w-36 overflow-hidden rounded-lg"
        >
            <CardBody className="relative w-full h-full p-3 mx-auto flex justify-center">
                <div className="animate-pulse flex space-x-4 w-full">
                    <div className="flex-1 space-y-4 py-1 h-20">
                        <div className="h-2 bg-gray-400 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                                <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                            </div>
                            <div className="h-20 flex items-end justify-between flex-col !mt-12">
                                <div className="h-6 w-full bg-gray-400 rounded"></div>
                                <div className="h-10 w-full bg-gray-400 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default BookSkeleton;