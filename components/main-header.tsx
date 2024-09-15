import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export const MainHeader = () => {
  return (
    <header className="flex flex-row justify-evenly items-center p-7">
      <Link href="/" className="flex flex-row items-center gap-6">
        <Image
          src={logoImg}
          alt="A plate with food on it"
          width={64}
          height={64}
          priority
        />
        <p className="text-xl text-white font-bold uppercase">NextLevel Food</p>
      </Link>

      <nav>
        <ul className="flex flex-row gap-10">
          <li>
            <Link href="/meals" className="text-xl text-white font-bold">
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className="text-xl text-white font-bold">
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
