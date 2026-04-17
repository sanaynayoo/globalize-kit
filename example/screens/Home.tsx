import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from '@theo-i18n/globalize-kit'

// sample demo
import { languageDemo, LanguageType } from "../data/language";

export default function HomeScreen() {
  const { t, language, changeLanguage } = useTranslation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#567B52', '#0F1C1E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1, width: '100%' }}
            />
            <View style={{ position: 'absolute', alignItems: 'center' }}>
                <View style={{ height: 50 }}>
                    <Text style={styles.title}>{t('welcome')}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    {languageDemo.map((list: LanguageType, idx: number) => (
                        <TouchableOpacity onPress={() => changeLanguage(list.code)} key={idx} style={[styles.langContainer, { backgroundColor: language === list.code ? '#A0C19D' : 'transparent' }]}>
                            <Text style={{ color: language === list.code ? '#000' : '#fff' }}>{list.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
        fontSize: 20,
        color: '#fff',
    },
    langContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 5,
        paddingVertical: 12,
        borderRadius: 5,
        borderColor: '#6B9966',
        borderWidth: 1
    }
})
