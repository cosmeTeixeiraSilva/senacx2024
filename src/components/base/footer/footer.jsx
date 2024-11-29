
import { Rocket } from "lucide-react";
import { Label } from "@/components/ui/label";
export default function Footer() {
    return (
        <div className="flex flex-col justify-center">

            <div className="footer   rounded text-orange-500 text-2xl  mb-1 flex
             justify-center align-text-bottom">
                <Rocket className="text-center mr-4 size-12 text-blue-600" />
                <Label className="md:text-3xl sm:text-sm  text-orange-400">SenacX  - 2024</Label>
                <Rocket className="text-center ml-4 size-12 text-blue-600" />

            </div>
        </div>
    );
};
