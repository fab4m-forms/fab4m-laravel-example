import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import "@fab4m/fab4m/css/basic/basic.css";
import { StatefulFormView } from "@fab4m/fab4m";
import form from "../../Forms/Diary";

export default function Edit({ diary }) {
    form.onSubmit((e, data) => {
        e.preventDefault();
        Inertia.put(`/diaries/${diary.id}`, data);
    });
    return (
        <GuestLayout>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Edit diary
            </h2>
            <Head title="Create new diary" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <StatefulFormView form={form} data={diary} />
                </div>
            </div>
        </GuestLayout>
    );
}
