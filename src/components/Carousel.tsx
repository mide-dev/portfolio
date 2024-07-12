import SlideShow from "./Slider";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "./ui/button";

export function ProjectCarousel({ data }: any) {
  return (
    <main className="w-full max-w-[800px]">
      {data.map((proj: any, index: number) => (
        <div key={index} className="mb-10">
          <div className="pt-3">
            <Card className="p-6 flex flex-col justify-center items-center bg-[#f5f5f5]">
              <CardTitle>{proj.title}</CardTitle>
              <CardHeader className="text-[14px]">{proj.desc}</CardHeader>
              <CardDescription>{proj.technology}</CardDescription>
              <CardContent className="flex items-center justify-center">
                <SlideShow images={proj.images} />
              </CardContent>
              <CardFooter className="flex flex-col lg:flex-row gap-4">
                <a href={proj.website} target="_blank">
                  <Button>Live Application</Button>
                </a>
                <a href={proj.github} target="_blank">
                  <Button>GitHub</Button>
                </a>
                <a href="#">
                  <Button disabled>Watch Video Demo</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          <span className="border-b-2"></span>
        </div>
      ))}
    </main>
  );
}
