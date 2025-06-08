import { Suspense } from "react";
import Loading from "./loading";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container w-full px-2.5 lg:px-20 mx-auto py-10">
            <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
        </div>
    );
}