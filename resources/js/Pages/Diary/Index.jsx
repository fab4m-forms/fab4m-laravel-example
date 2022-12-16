import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Index({ diaries }) {
    return (
        <GuestLayout>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Diaries
            </h2>
            <Head title="Diaries" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Link
                        className="text-blue-700 mb-4"
                        href={route("diaries.create")}
                    >
                        Create new diary
                    </Link>
                    {diaries.map((diary, index) => (
                        <article className="mb-4" key={index}>
                            <h3 className="font-bold text-lg mb-2">
                                <Link
                                    href={`/diaries/${diary.id}`}
                                    className="text-blue-700"
                                >
                                    {diary.title}
                                </Link>
                            </h3>
                            <p className="mb-2">{diary.body}</p>
                            <p className="text-sm">
                                Created ad {diary.created_at}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}
