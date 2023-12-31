import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {decode} from 'html-entities';
import { useEffect } from 'react';
import Markdown from "@valasolutions/react-native-markdown";

const AnswerListItem = ({ answer }) => {

    return (
        <View style={styles.container}>
            <View>
                <AntDesign name="upcircleo" size={24} color="white" />
                <Text style={styles.score}>{answer.answer_count}</Text>
                <AntDesign name="downcircleo" size={24} color="white" />
                {answer.is_accepted && (
                    <Entypo name="check" size={22} color="#8CCA72" style={{ marginTop: 10 }} />
                )}
            </View>
            <View style={styles.containerBody}>
                <Markdown style={styles.body}>
                    {decode(answer.body_markdown)}
                </Markdown>
                <Text style={styles.time}>
                    answered {new Date(answer.creation_date * 1000).toDateString()}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 25,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
    },
    containerBody: {
        flexDirection: 'column',
        marginBottom: 25,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#575757',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginLeft: 5,
    },
    leftContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    score: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
    },
    bodyContainer: {
        flex: 1,
    },
    body: {
        lineHeight: 18,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
    time: {
        marginLeft: 'auto',
        fontSize: 12,
        color: '#6a737c',
        marginTop: 10,
    },
});

export default AnswerListItem;