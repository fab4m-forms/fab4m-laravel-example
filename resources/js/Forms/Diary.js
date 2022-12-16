import {
    createForm,
    textField,
    textAreaWidget,
    tagsWidget,
} from "@fab4m/fab4m";

export default createForm({
    title: textField({ label: "Title", required: true }),
    body: textField({
        label: "Body",
        required: true,
        widget: textAreaWidget(),
    }),
    tags: textField({
        label: "Tags",
        multiple: true,
        multipleWidget: tagsWidget(),
    }),
});
