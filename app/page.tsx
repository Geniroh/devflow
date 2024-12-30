import Image from "next/image";

function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello World</h1>
      <p className="text-lg">Welcome to Next.js!</p>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}

export default Home;
