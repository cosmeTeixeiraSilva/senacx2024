
import { Rocket } from "lucide-react";
import { Label } from "@/components/ui/label";
export default function Footer() {
    return (
        <div className="flex flex-col justify-center">

            <div className="footer   rounded text-orange-500 text-2xl p-1 mt-12 flex
             justify-center align-text-bottom">
                <Rocket className="text-center mr-4 size-12 text-blue-600" />
                <Label className="md:text-3xl sm:text-sm text-black">SenacX  - 2024</Label>
                <Rocket className="text-center ml-4 size-12" />

            </div>
        </div>
    );
};
