import { SimpleForm, ReferenceInput, required, NumberInput, Create, TextInput } from "react-admin";

export const LessonCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                source="id"
                validate={[required()]}
                label="Id"
                />
                <ReferenceInput
                source={"unitId"}
                reference={"units"}
                />

                <NumberInput
                source={"order"}
                validate={[required()]}
                label="Order"
                />
            </SimpleForm>
        </Create>
    );
};