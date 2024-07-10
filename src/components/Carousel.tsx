import SlideShow from "./Slider";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

export function ProjectCarousel({ data }: any) {
  return (
    <Carousel className="w-full max-w-[800px]">
      <CarouselContent>
        {data.map((proj: any, index: number) => (
          <CarouselItem key={index}>
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
                <small className="font-medium">
                  swipe the card to see more projects
                </small>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
