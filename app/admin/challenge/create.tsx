import { SimpleForm, ReferenceInput, required, NumberInput, Create, TextInput, SelectInput } from "react-admin";

export const ChallengeCreate = () => {
    return (
        <Create>
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
        </Create>
    );
};