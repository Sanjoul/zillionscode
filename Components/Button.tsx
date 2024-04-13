import Image from "next/image";

interface ButtonProps {
    text: string;
    styling: string;

    img?: string; // Making img prop nullable
}

const Button: React.FC<ButtonProps> = ({ text, styling, img }) => {
    return (
        <button
            className={`py-5  px-8 flex ${styling}  font-bold`}
        >
            {img && <Image src={img} alt={text} width={100} height={100} className="mr-2 h-6 w-6" />}
            {text}
        </button>
    );
};

export default Button;
