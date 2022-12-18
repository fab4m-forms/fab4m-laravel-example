import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import "@fab4m/fab4m/css/basic/basic.css";
import form, { fab4mFromData } from "../../Forms/Form";
import { StatefulFormView, generateSchema, serialize } from "@fab4m/fab4m";

export default function Create() {
    form.onSubmit((e, data) => {
        e.preventDefault();
        const form = fab4mFromData(data);
        Inertia.post(route("forms.store"), {
            title: data.title,
            schema: JSON.stringify(generateSchema(form)),
            form: serialize(form),
        });
    });
    return (
        <GuestLayout>
            <Head title="Create a new form" />
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create a new form
            </h2>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <StatefulFormView form={form} />
                </div>
            </div>
        </GuestLayout>
    );
}
