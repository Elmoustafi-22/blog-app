import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-blue-600 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className=" text-4xl text-white font-semibold mb-4 font-poppins">
          Browse our blog collection
        </h2>
        <Link href={'/blogs'} className="bg-white text-sm text-blue-600 font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg transition-all">Explore Blogs</Link>
      </div>
    </div>
  );
}
