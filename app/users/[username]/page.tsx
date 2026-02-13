"use client";
import "flag-icons/css/flag-icons.min.css";
import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import {
  BinocularsIcon,
  NutIcon,
  PencilSimpleLineIcon,
  SealCheckIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLinechart from "@/components/AppLinechart";

export default function UserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Nike Adebayo</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-medium">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <div className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2">
                    <SealCheckIcon />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="rounded-full bg-green-500/30 border border-green-500/50 p-2">
                    <ShieldCheckIcon />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin User</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage users
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2">
                    <NutIcon />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contribution
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <div className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2 ">
                    <BinocularsIcon />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-medium">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>
                    <PencilSimpleLineIcon className="mr-1" />
                    Edit user
                  </Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span> <span>Nike</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>{" "}
                <span>NikeAdebayo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>{" "}
                <span>+234 90 1243 8792</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span className="fi fi-ng"></span>
                <span>Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge variant="secondary" className="flex gap-2">
                  <ShieldCheckIcon className="bg-green-500/30 border border-green-500/50 rounded-full " />
                  <span>Admin</span>
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Joined on 14.02.2026
              </p>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transaction" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="" />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Nike Adebayo</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Nike Adebayo joined 6 months ago and has completed 12 purchases
              totaling ₦847,500. Her top categories include fashion accessories
              and beauty products. Average order value: ₦70,625. Last active 3
              days ago. Highest engagement during weekend sales. Recently viewed
              sneakers and handbags. Cart abandonment rate: 15%. Loyal customer
              with 92% satisfaction rating.
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1>Total spend (₦)</h1>
            <AppLinechart />
          </div>
        </div>
      </div>
    </div>
  );
}
