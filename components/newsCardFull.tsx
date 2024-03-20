"use client"
import {Button, Card, CardBody, Image} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";

const news1full =()=>{
    return(
        <div>
            <Card className="shadow-md rounded-lg p-4 m-4">
                <CardHeader className="text-center">Polowanie Wigilijne</CardHeader>
                <CardBody className="p-4">
                    <p className="text-gray-200 leading-6">
                        Jak co roku w Kole Łowieckim Żbik odbyło się tradycyjne polowanie wigilijne. Przed polowaniem członkowie koła uzupełnili siano w paśniku na Boguszy. Po polowaniu odbyło się tradycyjne spotkanie opłatkowe z poczęstunkiem i śpiewaniem kolęd.

                    </p>
                    <div className="mt-4 mx-auto">
                        <Image src={"/wigilia1.jpg"} alt="" />
                        <Image src={"/wigilia2.jpg"} alt="" />
                        <Image src={"/wigilia3.jpg"} alt="" />

                    </div>
                </CardBody>
            </Card>
        </div>


    );
}
export default news1full