import { View, Text, FlatList } from 'react-native';
import { useSearchParams } from 'expo-router';
import questions from "../data/questions.json";
import answers from "../data/answers.json";
import { StyleSheet } from 'react-native';
import QuestionHeader from '../src/components/QuestionHeader';
import AnswerListItem from '../src/components/AnswerListItem';


const QuestionDetailsPage = () => {
    const { id } = useSearchParams();
    const question = questions.items.find(q => q.question_id == id);

    if (!question) {
        return <Text>Question not find</Text>
    }

    /* return (
        <View style={styles.container}>
            <QuestionHeader question={question}/>
        </View>
    ); */
    return (
        <View style={styles.container}>
            <FlatList
                data={answers.items}
                renderItem={({ item }) => <AnswerListItem answer={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#000"
    },
    answer: {
        
    }
})

export default QuestionDetailsPage;