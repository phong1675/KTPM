
import { SimpleForm, ReferenceInput, required, NumberInput, Edit, TextInput } from "react-admin";

export const LessonEdit = () => {
    return (
        <Edit>
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
        </Edit>
    );
};