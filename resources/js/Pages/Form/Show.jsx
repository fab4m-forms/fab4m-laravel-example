import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import "@fab4m/fab4m/css/basic/basic.css";
import { unserializeForm } from "../../Forms/Form";
import { StatefulFormView, useForm } from "@fab4m/fab4m";

export default function Show({ form }) {
    const [unserializedForm, changeUnserializedForm] = useState(null);
    useEffect(() => {
        unserializeForm(form.form).then(changeUnserializedForm);
    }, []);
    unserializedForm?.onSubmit((e, data) => {
        e.preventDefault();
        Inertia.post(route("forms.submissions.store", [form.id]), {
            submission: data,
        });
    });
    return (
        <GuestLayout>
            <Head title="Show form" />
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create a new form
            </h2>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {unserializedForm && (
                        <StatefulFormView form={unserializedForm} />
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
