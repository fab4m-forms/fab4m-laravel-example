import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import "@fab4m/fab4m/css/basic/basic.css";
import form from "../../Forms/Diary";
import { StatefulFormView } from "@fab4m/fab4m";

export default function Create() {
    form.onSubmit((e, data) => {
        e.preventDefault();
        Inertia.post(route("diaries.store"), data);
    });
    return (
        <GuestLayout>
            <Head title="Create new diary" />
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create new diary
            </h2>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <StatefulFormView form={form} />
                </div>
            </div>
        </GuestLayout>
    );
}
