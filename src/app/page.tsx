"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { generateImage } from "@/ai/flows/generate-image-flow";
import { cn } from "@/lib/utils";

export default function Home() {
  const [heroImage, setHeroImage] = useState("https://placehold.co/600x400.png");
  const [landscapeImage, setLandscapeImage] = useState("https://placehold.co/800x450.png");
  const [loadingHero, setLoadingHero] = useState(true);
  const [loadingLandscape, setLoadingLandscape] = useState(true);

  useEffect(() => {
    const generateHeroImage = async () => {
      try {
        const result = await generateImage({ prompt: "abstract geometric" });
        if (result.imageUrl) {
          setHeroImage(result.imageUrl);
        }
      } catch (error) {
        console.error("Failed to generate hero image:", error);
      } finally {
        setLoadingHero(false);
      }
    };

    const generateLandscapeImage = async () => {
        try {
            const result = await generateImage({ prompt: "nature landscape" });
            if (result.imageUrl) {
                setLandscapeImage(result.imageUrl);
            }
        } catch (error) {
            console.error("Failed to generate landscape image:", error);
        } finally {
            setLoadingLandscape(false);
        }
    }

    generateHeroImage();
    generateLandscapeImage();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Experience Seamless Navigation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our Sticky Chameleon Nav adapts to your journey, providing a beautiful and intuitive user experience that's always there when you need it.
                </p>
              </div>
            </div>
            <div className="relative">
              {loadingHero && <div className="absolute inset-0 bg-secondary/50 animate-pulse rounded-xl" />}
              <Image
                src={heroImage}
                width="600"
                height="400"
                alt="Abstract design representing smooth navigation"
                className={cn(
                  "mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full transition-opacity duration-500",
                  loadingHero ? "opacity-50" : "opacity-100"
                )}
                data-ai-hint="abstract geometric"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Key Features</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why You'll Love It</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the features that make our navigation truly special and a delight to use.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Fixed Positioning</CardTitle>
                <CardDescription>Always in sight, never in the way. Our navigation menu stays at the top, giving you constant access.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Elegant Hover Effects</CardTitle>
                <CardDescription>Subtle yet clear visual cues on hover guide you effortlessly through the site, making navigation a breeze.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Dynamic on Scroll</CardTitle>
                <CardDescription>The menu transforms with a smooth animation as you scroll, adding a touch of magic to your browsing experience.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore the Content Below</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've added plenty of content here to demonstrate the sticky navigation effect. Scroll down to see it in action.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-left text-foreground/90 space-y-6 mt-8 text-lg leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
            <div className="relative">
              {loadingLandscape && <div className="absolute inset-0 bg-secondary/50 animate-pulse rounded-xl" />}
              <Image
                src={landscapeImage}
                width="800"
                height="450"
                alt="Placeholder Image"
                className={cn(
                  "mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-opacity duration-500",
                  loadingLandscape ? "opacity-50" : "opacity-100"
                )}
                data-ai-hint="nature landscape"
              />
            </div>
            <p>Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Proin ullamcorper urna et felis. Vestibulum iaculis lacinia est. Proin dictum elementum velit.</p>
            <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
