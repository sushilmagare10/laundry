import Sidebar from "./_components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full relative">
            <div className=" hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-40 bg-neutral-50">
                <Sidebar />
            </div>
            <main className=" md:pl-72 pb-10">
                {children}
            </main>
        </div>
    );
}
