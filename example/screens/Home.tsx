import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from '@theo-i18n/globalize-kit'

// sample demo
import { languageDemo, LanguageType } from '../data/language'

export default function HomeScreen() {
    const { t, language, changeLanguage } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={{ height: 50 }}>
                <Text style={styles.title}>{t('auth.login')}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                {languageDemo.map((list: LanguageType, idx: number) => (
                    <TouchableOpacity onPress={() => changeLanguage(list.code)} key={idx} style={[styles.langContainer, { backgroundColor: language === list.code ? '#FFF6CE' : '#ffffff' }]}>
                        <Text>{list.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: '#000000',
    },
    langContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#6E710C',
        borderWidth: 0.5
    }
})
