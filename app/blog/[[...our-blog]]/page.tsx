import Link from "next/link";

export default function OurBlog() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Latest Blog Posts
        </h2>
        <p className="mt-3 text-muted-foreground md:text-xl">
          Discover the latest insights and trends from our expert writers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/_4413c4a1-9ecb-4f94-bf30-e250b2a2673e.jpg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">
              Unlocking the Power of Automation: Streamlining Your Workflow
            </h3>
            <p className="mt-2 text-muted-foreground">
              Discover how automation can revolutionize your workflow and boost
              productivity.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                {/**
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                 */}
                <span>John Doe</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>May 15, 2023</span>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/_4413c4a1-9ecb-4f94-bf30-e250b2a2673e.jpg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">
              Mastering the Art of Responsive Design: Creating Seamless
              Experiences
            </h3>
            <p className="mt-2 text-muted-foreground">
              Learn how to build responsive websites that adapt to any device
              and screen size.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                {/**
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                  */}
                <span>Jane Doe</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>June 1, 2023</span>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/_4413c4a1-9ecb-4f94-bf30-e250b2a2673e.jpg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">
              Unleashing the Power of Data: Transforming Insights into Action
            </h3>
            <p className="mt-2 text-muted-foreground">
              Discover how to leverage data to drive informed decision-making
              and business growth.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                {/**
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                */}
                <span>Bob Smith</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>June 15, 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        {/**
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        */}
      </div>
      <hr />
    </div>
  );
}

{
  /**
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Latest Blog Posts</h2>
        <p className="mt-3 text-muted-foreground md:text-xl">
          Discover the latest insights and trends from our expert writers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Unlocking the Power of Automation: Streamlining Your Workflow</h3>
            <p className="mt-2 text-muted-foreground">
              Discover how automation can revolutionize your workflow and boost productivity.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
               <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>May 15, 2023</span>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">
              Mastering the Art of Responsive Design: Creating Seamless Experiences
            </h3>
            <p className="mt-2 text-muted-foreground">
              Learn how to build responsive websites that adapt to any device and screen size.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>Jane Doe</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>June 1, 2023</span>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Blog post image"
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Unleashing the Power of Data: Transforming Insights into Action</h3>
            <p className="mt-2 text-muted-foreground">
              Discover how to leverage data to drive informed decision-making and business growth.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>Bob Smith</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>June 15, 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ) */
}
