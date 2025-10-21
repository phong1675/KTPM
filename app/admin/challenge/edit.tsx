import { SimpleForm, ReferenceInput, required, NumberInput, TextInput, SelectInput, Edit } from "react-admin";

export const ChallengeEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput
                source="question"
                validate={[required()]}
                label="Question"
                />

                <SelectInput
                    source="type"
                    choices={[
                        {
                            id: "SELECT",
                            name: "SELECT",
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST",
                        }
                    ]}
                    validate={[required()]}
                />

                <ReferenceInput
                source={"lessonId"}
                reference={"lesson"}
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