import {
    createForm,
    textFieldType,
    textField,
    booleanField,
    textFieldWidget,
    textFieldWidgetType,
    numberFieldWidget,
    numberFieldWidgetType,
    checkboxWidget,
    checkboxWidgetType,
    integerFieldType,
    booleanFieldType,
    selectWidget,
    formComponent,
    serialize,
    unserialize,
    basic,
    group,
} from "@fab4m/fab4m";

const fieldTypes = [textFieldType, integerFieldType, booleanFieldType];
export default createForm({
    title: textField({ label: "Title", required: true }),
    fields: group(
        {
            label: "Fields",
            minItems: 1,
            multiple: true,
        },
        {
            label: textField({ label: "Label", required: true }),
            fieldType: textField({
                label: "Field type",
                required: true,
                widget: selectWidget(
                    fieldTypes.map((field) => [field.title, field.name])
                ),
            }),
            required: booleanField({ label: "Required" }),
        }
    ),
});

const widgets = {
    [textFieldType.name]: textFieldWidget,
    [booleanFieldType.name]: checkboxWidget,
    [integerFieldType.name]: numberFieldWidget,
};

export function fab4mFromData(data) {
    const form = createForm();
    for (const field of data.fields) {
        const fieldType = fieldTypes.find(
            (type) => type.name === field.fieldType
        );
        form.add(
            formComponent({
                type: fieldType,
                name: `field_${form.components.length}`,
                label: field.label,
                required: field.required,
                widget: widgets[fieldType.name](),
            })
        );
    }
    return form;
}

export async function unserializeForm(form) {
    return await unserialize(
        form,
        [textFieldType, booleanFieldType, integerFieldType],
        [basic],
        [textFieldWidgetType, checkboxWidgetType, numberFieldWidgetType],
        [],
        [],
        []
    );
}
