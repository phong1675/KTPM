import { Datagrid, List, TextField, ReferenceField, SelectField, BooleanField, NumberField } from "react-admin";

export const ChallengeOptionList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>    
                <TextField source="title" />
                <TextField source="text" />
                <BooleanField
                    source="correct"
                />
                <ReferenceField source="challengeId" reference="challenges" />
                <TextField source="imageSrc" />
                <TextField source="audioSrc" />
            </Datagrid>
        <List/>
    );
};