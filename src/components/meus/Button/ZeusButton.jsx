import { Button } from "../../ui/button";
import "./ZeusButton.css"
export default function ZeusButton({ texto }) {
    return (
        <Button variant="primary" className="zeusButton bg-[#FDC180] text-dark mx-2 mt-3 rounded ">
            {texto}
        </Button>
    );
};