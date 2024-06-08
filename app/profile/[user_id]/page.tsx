import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tabs } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star, Edit, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Header from '@/components/_shared/Header';

export default function ProfilePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 pb-14 md:grid-cols-3 md:gap-8 md:px-6 md:pt-11 lg:grid-cols-4 lg:gap-[60px]">
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <Avatar>
              <AvatarImage src="https://vercel.com/api/www/avatar/p24fBmFTgaeuWPrR87Qc6clQ" alt="Avatar" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <h1 className="text-[32px] font-semibold leading-none tracking-tight">raimirarara</h1>
              <p className="whitespace-nowrap text-sm text-gray-600">@raimirarara</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-4">
            <Button variant="outline" className="absolute right-0 top-0 h-8 w-8 rounded-full p-0 md:static md:w-auto md:rounded-lg md:px-3">
              <Edit className="h-4 w-4 md:mr-2" />
              <span className="sr-only md:not-sr-only">Edit Profile</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:col-span-2 lg:col-span-3 lg:py-14">
          <Tabs defaultValue="recent" className="w-full sm:w-auto">
            <div className="mb-4 flex w-full flex-col-reverse justify-between sm:mb-0 sm:flex-row sm:items-center">
              <span className="mt-2 hidden text-sm text-gray-950 sm:mt-0 sm:inline">Recent generations</span>
              <TabsList>
                <TabsTrigger value="recent">
                  <Star className="mr-2 h-4 w-4" /> Recent
                </TabsTrigger>
                <TabsTrigger value="stars">
                  <Star className="mr-2 h-4 w-4" /> Stars
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator className="my-6" />
            <TabsContent value="recent" className="grid gap-12">
              <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Item 1 */}
                <li className="space-y-4">
                  <div className="group relative block aspect-square w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
                    <Button
                      variant="outline"
                      className="bg-gs-blue-300 text-gs-blue-900 absolute right-2 top-2 z-10 h-8 w-8 rounded-sm p-0 md:right-1 md:top-1 md:h-5 md:w-5"
                    >
                      <Lock className="h-4 w-4 md:h-3 md:w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      className="absolute right-11 top-2 z-10 h-8 w-8 rounded-sm p-0 text-gray-500 hover:text-gray-900 md:right-7 md:top-1 md:h-5 md:w-5"
                    >
                      <Star className="h-4 w-4 md:h-3 md:w-3" />
                    </Button>
                    <AspectRatio ratio={1 / 1}>
                      <Image src="/fortune.png" alt="image" fill />
                    </AspectRatio>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://vercel.com/api/www/avatar/p24fBmFTgaeuWPrR87Qc6clQ?s=64" />
                      </Avatar>
                      <div className="flex flex-1 items-center rounded-2xl bg-gray-100 px-3 py-1">
                        <span className="line-clamp-1 break-all text-left text-sm">Hello</span>
                      </div>
                    </div>
                  </div>
                </li>

                {/* More items... */}
              </ul>
            </TabsContent>
            <TabsContent value="stars">{/* Starred items */}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
