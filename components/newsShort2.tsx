import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const NewsShort2 =()=>{

    return (
        <div>
            <Card
                shadow="sm"
                className="rounded-lg overflow-hidden"
            >
                <CardBody className="p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt=""
                        className="w-full object-cover h-48"
                        src="/swieca.jpg"
                    />
                </CardBody>
                <CardFooter className="p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <b className="text-lg font-semibold">Do Krainy Wiecznych Łowów odszedł Kolega Władysław Stanek</b>
                            </div>
                            <div>
                                <button className="text-blue-500 hover:underline">
                                    <a href="/news2">Czytaj więcej</a>
                                </button>

                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </div>
    );


}
export default NewsShort2