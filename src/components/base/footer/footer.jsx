
import { Rocket } from "lucide-react";
import { Label } from "@/components/ui/label";
export default function Footer() {
    return (
        <div className="flex flex-col justify-center">

            <footer className="footer   rounded text-orange-500 text-2xl p-1 mt-12 flex
             justify-center align-text-bottom">
                <Rocket className="text-center mr-4 size-12" />
                <Label className="text-3xl">SenacX Lavras - 2024</Label>
                <Rocket className="text-center ml-4 size-12" />

            </footer>
        </div>
    );
};