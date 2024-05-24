import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const NewsShort2505 = () => {
    return (
        <div>
            <Card shadow="sm" className="rounded-lg overflow-hidden">
                <CardBody className="p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt="walne"
                        className="w-full object-cover h-48"
                        src="/icorogacz.jpg"
                    />
                </CardBody>
                <CardFooter className="p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <b className="text-lg font-semibold">Zawiadomienie o Walnym Zgromadzeniu</b>
                            </div>
                            <div>
                                <a href="/news3" className="text-blue-500 hover:underline">Czytaj więcej</a>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NewsShort2505;
