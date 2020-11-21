import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../../components/Screen/Screen";
import * as Yup from "yup";
import SubmitButton from "../../components/forms/SubmitButton/SubmitButton";
import AppFormField from "../../components/forms/AppFormField/AppFormField";
import AppForm from "../../components/forms/AppForm/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
      />

      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          placeholder="Email"
          icon="email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 20,
  },
});

export default LoginScreen;
