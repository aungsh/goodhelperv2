import { Github, Heart, Users, Eye } from "lucide-react";

export default function About() {
  return (
    <>
      <h1 className="text-8xl font-bold mt-38">About</h1>
      <div className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-8">
        <Heart className="text-red-500" />
        We serve with purpose
      </div>

      <div className="max-w-4xl space-y-6 text-2xl leading-relaxed font-medium">
        <p className="text-balance">
          Welcome to{" "}
          <span className="font-bold text-emerald-600">GoodHelper</span>, a
          modern domestic helper agency based in Singapore. We are dedicated to
          connecting families with trusted, professional helpers who make daily
          life easier and more enjoyable. Our mission is to provide reliable
          support, foster positive relationships, and ensure a smooth experience
          for both employers and helpers.
        </p>
        <p className="text-balance"></p>

        <div className="my-10 flex flex-wrap gap-4">
          Thank you for checking us out!
        </div>
      </div>
    </>
  );
}
