import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

const QuestionListItem = ({ question }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.stats}>{question.score} votes · {question.answer_count} answers · {question.view_count} views</Text>
            <Link style={styles.link} href={`/${question.question_id}`}>
                <Text style={styles.title}>{question.title}</Text>
            </Link>
            <Text numberOfLines={2} style={styles.body}>{question.body_markdown}</Text>
            <View style={styles.tags}>
                {question.tags.map(tag => (
                    <Text key={tag} style={styles.tag}>{tag}</Text>
                ))}
                <Text style={styles.time}>{new Date(question.creation_date * 1000).toDateString()}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    link: {
        flex: 1,
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#373737',
        borderRadius: 10,
        padding: 15,
        borderBottomWidth: 0.5,
        marginBottom: 15,
        flex: 1,
        flexGrow: 1,
        width: '100%',
    },
    stats: {
        fontSize: 12,
        color: '#878787'
    },
    title: {
        color: '#0063bf',
        marginVertical: 15,
        fontSize: 17,
    },
    body: {
        fontSize: 11,
        color: "#828282",
    },
    tag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5,
        fontSize: 12,
        backgroundColor: 'rgba(47, 112, 251, 0.56)',
        borderRadius: 5,
        color: '#fff',
        overflow: 'hidden',
    },
    tags: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
    },
    time: {
        marginLeft: 'auto',
        color: 'dimgray'
    }
});


export default QuestionListItem;