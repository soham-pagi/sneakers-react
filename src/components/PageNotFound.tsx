import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center text-4xl">
      <p className="font-extralight">404 | Page Not Found</p>
      <Link
        className="bg-amber-600 px-5 py-2 rounded-md text-white text-xl"
        to={"/"}
      >
        Go to home
      </Link>
    </div>
  );
}
