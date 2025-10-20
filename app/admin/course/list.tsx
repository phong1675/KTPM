import { DataGrid, List, TextField } from "react-admin";

export const CourseList = () => {
    return (
        <List>
            <DataGrid rowClick="edit">
                <TextField source="id"/>    
                <TextField source="title" />
                <TextField source="imageSrc"/>
            </DataGrid>        
        <List/>
    );
};