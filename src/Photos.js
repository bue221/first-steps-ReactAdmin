import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm,ReferenceInput, SelectInput, TextInput , FileInput, FileField, Create, ImageField } from 'react-admin';

const PreviewImage = ({ record, source }) => {
   if (typeof record == "string") {
     record = {
       [source]: `${record}`,
     };
  }
   return <ImageField record={record} source={source} />;
};



export const PostList = props => (
    <List {...props}>
        <Datagrid> 
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
            <TextField source="title" />
            <ImageField source="body" title="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <FileInput source="body" label="Related files" accept=".jpg .png">
              <ImageField source="src" title="body" />
            </FileInput>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <FileInput source="body" label="Related files" accept="application/pdf" placeholder={<p>Drop your file here</p>}>
    <ImageField source="body" title="body.title" />
</FileInput>
        </SimpleForm>
    </Create>
);

export const PhotoList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField source="albumId" reference="albums"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <PreviewImage source={ "url" ? "url" : "src"} />
            <TextField source="thumbnailUrl" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PhotoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="albumId" reference="albums"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <FileInput source="url" label="Related files" accept=".png" placeholder={<p>Drop your file here</p>}>
    <PreviewImage source="src"/>
</FileInput>
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Edit>
);
