import React from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import AppForm from '../../components/forms/AppForm/AppForm';
import AppFormField from '../../components/forms/AppFormField/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker/AppFormPicker';
import SubmitButton from '../../components/forms/SubmitButton/SubmitButton';
import { StyleSheet } from 'react-native';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    {label: "Furniture", value: 1 },
    {label: "Clothing", value: 2 },
    {label: "Cameras", value: 3 }
  ]

const ListingEditScreen = () => {
    return ( <Screen style={styles.container}>
        <AppForm initialValues={{
            title: "",
            price: "",
            description: "",
            categories: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        >
            <AppFormField 
            maxLength={255}
            name="title"
            placeholder="Title"
            />

            <AppFormField 
            keyboardType="numeric"
            maxLength={8}
            width={120}
            name="price"
            placeholder="Price"
            />

            <AppFormPicker 
            items={categories}
            name="category"
            placeholder="Category"
            width="50%"
            />

            <AppFormField 
            maxLength={255}
            multiline={true}
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <SubmitButton title="post"/>
        </AppForm>
    </Screen> );
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
 
export default ListingEditScreen;  