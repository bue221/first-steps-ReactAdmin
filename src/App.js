import * as React from "react";
import { Admin, Resource, EditGuesser , ListGuesser} from 'react-admin';
import { PostList, PostEdit, PostCreate, PhotoList, PhotoEdit } from './Photos';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ()=>{
        return(
                <Admin dataProvider={dataProvider}>
                        <Resource name="posts" list={PostList} edit={PostEdit}/>
                        <Resource name="users" list={UserList} />
                        <Resource name="albums" list={ListGuesser} />
                        <Resource name="photos" list={PhotoList} edit={PhotoEdit} />
                </Admin>
        );
}

export default App;
