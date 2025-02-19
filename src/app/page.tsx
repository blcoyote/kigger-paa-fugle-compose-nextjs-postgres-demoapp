import SeagullLogo from "@/components/SeagullLogo";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="text-center flex items-center flex-col w-screen max-w-8xl gap-8">
        <h1 className="text-4xl font-bold mb-4">Vi kigger på fugle</h1>
        <SeagullLogo />
      </div>
    </div>
  );
}
