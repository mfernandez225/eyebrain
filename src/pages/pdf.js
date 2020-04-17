import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  header: {
    color: "green",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
    padding: 10,
  },
  impactHeader: {
    alignItems: "center",
    margin: 50,
    padding: 10,
  },
  dailySummary: {
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  impactResults: {
    alignItems: "center",
    margin: 5,
  },
  contactNumber: {
    alignItems: "center",
    marginTop: 200,
    padding: 10,
  },
  contactOptions: {
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
});

// Create Document Component
const MyDocument = ({ questions, calculations }) => (
  <Document>
    <Page size="A3" style={styles.page}>
      <View style={styles.header}>
        <Text>Customized Flow Commitment Sheet</Text>
      </View>
      <View style={styles.impactHeader}>
        <Text>
          Here is what you should expect to see on a daily basis in your
          practice. Everyone plays such a vital role in implementing this
          technology in your practice. Everyone has the oppurtunity to make an
          impact and tee it up for the next person. Please print this and post
          it in the office so everyone can stay on track. Neurolens is committed
          to your success so please don't hesitate to reach out if you have any
          questions.
        </Text>
      </View>
      <View style={styles.header}>
        <Text>Front Desk Daily Index Goal:</Text>
      </View>
      <View style={styles.dailySummary}>
        <Text>{calculations.whoToIndex}</Text>
      </View>
      <View style={styles.header}>
        <Text>Technicians Daily Device Run Goal:</Text>
      </View>
      <View style={styles.dailySummary}>
        <Text>{calculations.whoToRun}</Text>
      </View>
      <View style={styles.header}>
        <Text>OD's Daily Patient Conversation Goal:</Text>
      </View>
      <View style={styles.dailySummary}>
        <Text>{calculations.whoToTalkTo}</Text>
      </View>
      <View style={styles.contactNumber}>
        <Text>
          Please reach out if you have any questions at (949) 339-5157
        </Text>
      </View>
      <View style={styles.contactOptions}>
        <Text>Press [ 2 ] for Account Management</Text>
      </View>
      <View style={styles.contactOptions}>
        <Text>Press [ 3 ] for the Lab</Text>
      </View>
      <View style={styles.contactOptions}>
        <Text>Press [ 4 ] for Accounting</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
