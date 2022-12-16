import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Show({ diary }) {
    return (
        <GuestLayout>
            <Head title={diary.title} />
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Diary: {diary.title}
            </h2>
            <div className="py-12">
                <article className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <h3 class="font-bold">Entry</h3>
                    <p className="mb-4">{diary.body}</p>
                    <h3 class="font-bold">Tags</h3>
                    <ul className="list-disc ml-8 mt-1">
                        {diary.tags.map((tag, i) => (
                            <li key={i}>{tag}</li>
                        ))}
                    </ul>
                    <Link
                        className="text-blue-700"
                        href={route("diaries.edit", [diary.id])}
                    >
                        Edit
                    </Link>
                </article>
            </div>
        </GuestLayout>
    );
}
