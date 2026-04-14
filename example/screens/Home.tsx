import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation, useLocale } from '@theo/globalize-kit'
import { en } from "../helpers/translations";

export default function HomeScreen() {
    // const { t, language, changeLanguage } = useTranslation();
    const { locale, language, changeLanguage } = useLocale<typeof en>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{locale.register}</Text>

            <TouchableOpacity onPress={() => {
                if (language === 'my') {
                    changeLanguage("en")
                } else {
                    changeLanguage("my")
                }
            }}>
                <Text>Change Language</Text>
            </TouchableOpacity>
        </View>
    );
}
