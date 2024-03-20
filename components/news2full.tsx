"use client"
import {Card, CardBody, Image} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";

const News2full =()=>{
    return(
        <div>
            <Card className="shadow-md rounded-lg p-4 m-4">
                <CardHeader className="text-center">Zawiadomienie</CardHeader>
                <CardBody className="p-4">
                    <p className="text-gray-200 leading-6">
                        Z głębokim smutkiem zawiadamiamy, że w dniu 13 marca 2024 r. odszedł do Krainy Wiecznych Łowów nasz drogi Kolega i Przyjaciel Śp. Władysław Stanek.
                        Uroczystości pogrzebowe odbędą się w dniu 16 marca (sobota) o godz. 14 w Kościele Opatrzności Bożej w Królowej Górnej,
                        o czym zawiadamia Zarząd Koła Łowieckiego  ŻBIK w Nowym Sączu.
                    </p>
                    <div className="mt-4 mx-auto">
                        <img src="/klepsydraWS.PNG" alt="" />
                    </div>
                </CardBody>
            </Card>
        </div>


    );
}
export default News2full