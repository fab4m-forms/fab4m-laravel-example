import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Show({ submission }) {
    const data = [];
    for (const key in submission.submission) {
        data.push(
            <li key={key}>
                <strong>{`${key}: `}</strong>
                {submission.submission[key]}
            </li>
        );
    }
    return (
        <GuestLayout>
            <Head title="Submission" />
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Submission
            </h2>
            <div className="py-12">
                <ul>{data}</ul>
            </div>
        </GuestLayout>
    );
}
