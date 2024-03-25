import { Card, CardBody } from "@/providers";

const BookSkeleton = () => {
    return (
        <Card
            shadow={false}
            className="relative min-w-[10rem] max-w-[16rem] h-60 items-end justify-center overflow-hidden rounded-lg"
        >
            <CardBody className="relative w-11/12 h-full p-3 mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-gray-400 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                                <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                            </div>
                            <div className="h-28 flex items-end justify-between flex-col !mt-12">
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