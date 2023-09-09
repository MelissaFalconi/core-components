import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContactHandler = () => {
    if (contact.trim() !== "") {
      // Agregar un nuevo contacto a la lista
      setContacts([...contacts, { name: contact }]);
      // Limpiar el campo de entrada después de agregar el contacto
      setContact("");
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
          value={contact}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
      </View>
      <View style={styles.contactsContainer}>
        <Text>List of Contacts:</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 10,
    padding: 10,
  },
  contactsContainer: {
    flex: 1,
  },
});
