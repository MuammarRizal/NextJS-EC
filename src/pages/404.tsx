import Link from "next/link";
import styles404 from "@/styles/404.module.css";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <Image
        src="./404-notfound.gif"
        alt="Not Found"
        className={styles404.img}
      />
      <h2 className="text-4xl font-semibold text-gray-600 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mt-2">
        Sorry, the page you are looking for doesnt exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
