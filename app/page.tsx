import Image from "next/image";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-inter">Hello World</h1>
      <p className="text-lg font-space-grotesk">Welcome to Next.js!</p>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}

export default Home;
