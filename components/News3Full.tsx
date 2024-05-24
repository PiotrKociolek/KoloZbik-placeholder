import {Card, CardBody} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";


const News3Full =()=>{
    return(
        <div>
            <Card className="shadow-md rounded-lg p-4 m-4">
                <CardHeader className="text-center">Zawiadomienie o Walnym Zgromadzeniu</CardHeader>
                <CardBody className="p-4">
                    <p className="text-gray-200 leading-6">

                    </p>
                    <div className="mt-4 mx-auto">
                        <img src="/pdfwalne.PNG" alt="" />
                    </div>
                </CardBody>
            </Card>
        </div>


    );
}
export default News3Full