import { Card } from "@/components/ui/card";

export default function Manifesto() {
  return (
    <section className="py-8 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-10">
      <Card className="w-full max-w-xl h-80 rounded-3xl shadow-xl mb-6 md:mb-0 items-center flex flex-col justify-center">
        Put a nice picture
      </Card>
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-bold my-4 text-gray-900">
          manifesto:
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-8">
          At goodhelper, we connect families with independent, personal
          helpers—not just to ease the daily weight, but to create something
          more: <span className="font-semibold text-indigo-600">S p a c e</span>
          . Space for mamas like you and us to pause, breathe, and find a sense
          of balance again. To rediscover what it means to move through each day
          with intention. And most importantly, to redefine our purpose within
          the quiet, steady rhythms of motherhood.
        </p>
      </div>
    </section>
  );
}
